import React, { useEffect, useRef } from 'react';

/**
 * Animated "live executive dashboard" backdrop for the hero.
 * Gold line + area series flow across a faint grid, bars breathe
 * along the baseline and a scan line sweeps the chart like a cursor.
 * Pauses when the tab is hidden and draws a single still frame for
 * visitors who prefer reduced motion.
 */
export const DataFieldCanvas: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let running = true;
    const start = performance.now();

    type Particle = { x: number; y: number; r: number; vy: number; vx: number; a: number };
    let particles: Particle[] = [];

    const seedParticles = () => {
      const count = Math.round(Math.min(70, (width * height) / 22000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.4 + 0.3,
        vy: -(Math.random() * 0.18 + 0.04),
        vx: (Math.random() - 0.5) * 0.06,
        a: Math.random() * 0.5 + 0.15,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedParticles();
    };

    // Smooth pseudo-random signal: layered sines drifting over time.
    const signal = (x: number, t: number, seed: number) =>
      Math.sin(x * 0.011 + t * 0.55 + seed) * 0.5 +
      Math.sin(x * 0.027 - t * 0.35 + seed * 2.1) * 0.28 +
      Math.sin(x * 0.061 + t * 0.9 + seed * 3.7) * 0.12;

    const series = [
      { seed: 0.4, lift: 0.34, amp: 0.07, alpha: 0.95, widthPx: 2, fill: true },
      { seed: 2.2, lift: 0.22, amp: 0.06, alpha: 0.45, widthPx: 1.2, fill: false },
      { seed: 4.9, lift: 0.12, amp: 0.05, alpha: 0.28, widthPx: 1, fill: false },
    ];

    const draw = (now: number) => {
      const t = reduceMotion ? 2 : (now - start) / 1000;
      ctx.clearRect(0, 0, width, height);

      const isNarrow = width < 768;
      const x0 = isNarrow ? 0 : width * 0.3;
      const chartW = width - x0;
      const baseY = height * (isNarrow ? 0.9 : 0.8);
      const topY = height * 0.18;
      const span = baseY - topY;

      // Grid
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(212,175,55,0.055)';
      const cols = 12;
      for (let i = 0; i <= cols; i++) {
        const gx = x0 + (chartW / cols) * i;
        ctx.beginPath();
        ctx.moveTo(gx, topY - 40);
        ctx.lineTo(gx, baseY);
        ctx.stroke();
      }
      for (let j = 0; j <= 6; j++) {
        const gy = topY + (span / 6) * j;
        ctx.beginPath();
        ctx.moveTo(x0, gy);
        ctx.lineTo(width, gy);
        ctx.stroke();
      }

      // Bars along the baseline
      const bars = isNarrow ? 12 : 22;
      const barGap = chartW / bars;
      for (let i = 0; i < bars; i++) {
        const bx = x0 + barGap * i + barGap * 0.28;
        const growth = 0.25 + (i / bars) * 0.45;
        const h = span * 0.42 * (growth + 0.12 * Math.sin(t * 0.8 + i * 0.7));
        const g = ctx.createLinearGradient(0, baseY - h, 0, baseY);
        g.addColorStop(0, 'rgba(201,158,93,0.16)');
        g.addColorStop(1, 'rgba(201,158,93,0.015)');
        ctx.fillStyle = g;
        ctx.fillRect(bx, baseY - h, barGap * 0.44, h);
      }

      // Line series (upward trend + drifting noise)
      const step = 6;
      let mainPoints: [number, number][] = [];
      series.forEach((s, idx) => {
        const pts: [number, number][] = [];
        for (let x = x0; x <= width + step; x += step) {
          const p = (x - x0) / chartW; // 0 → 1 across chart
          const trend = s.lift + p * 0.42;
          const v = trend + signal(x, t, s.seed) * s.amp;
          pts.push([x, baseY - v * span]);
        }
        if (idx === 0) mainPoints = pts;

        if (s.fill) {
          const g = ctx.createLinearGradient(0, topY, 0, baseY);
          g.addColorStop(0, 'rgba(212,175,55,0.22)');
          g.addColorStop(0.6, 'rgba(212,175,55,0.05)');
          g.addColorStop(1, 'rgba(212,175,55,0)');
          ctx.beginPath();
          ctx.moveTo(pts[0][0], baseY);
          pts.forEach(([px, py]) => ctx.lineTo(px, py));
          ctx.lineTo(pts[pts.length - 1][0], baseY);
          ctx.closePath();
          ctx.fillStyle = g;
          ctx.fill();
        }

        const lg = ctx.createLinearGradient(x0, 0, width, 0);
        lg.addColorStop(0, `rgba(140,109,79,${s.alpha * 0.2})`);
        lg.addColorStop(0.5, `rgba(212,175,55,${s.alpha})`);
        lg.addColorStop(1, `rgba(247,231,196,${s.alpha})`);
        ctx.beginPath();
        pts.forEach(([px, py], i) => (i ? ctx.lineTo(px, py) : ctx.moveTo(px, py)));
        ctx.strokeStyle = lg;
        ctx.lineWidth = s.widthPx;
        ctx.shadowColor = 'rgba(212,175,55,0.55)';
        ctx.shadowBlur = idx === 0 ? 14 : 0;
        ctx.stroke();
        ctx.shadowBlur = 0;
      });

      // Data points on the main series
      const every = Math.max(1, Math.round(chartW / 11 / step));
      mainPoints.forEach(([px, py], i) => {
        if (i % every !== 0 || i === 0) return;
        ctx.beginPath();
        ctx.arc(px, py, 2.4, 0, Math.PI * 2);
        ctx.fillStyle = '#F7E7C4';
        ctx.shadowColor = '#D4AF37';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Sweeping scan line with a highlighted reading
      if (!reduceMotion && mainPoints.length) {
        const sweep = ((t * 0.09) % 1) * chartW + x0;
        const sg = ctx.createLinearGradient(0, topY - 40, 0, baseY);
        sg.addColorStop(0, 'rgba(212,175,55,0)');
        sg.addColorStop(0.5, 'rgba(212,175,55,0.35)');
        sg.addColorStop(1, 'rgba(212,175,55,0)');
        ctx.fillStyle = sg;
        ctx.fillRect(sweep, topY - 40, 1, baseY - topY + 40);
        const idx = Math.min(mainPoints.length - 1, Math.max(0, Math.round((sweep - x0) / step)));
        const [hx, hy] = mainPoints[idx];
        ctx.beginPath();
        ctx.arc(hx, hy, 5, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(247,231,196,0.9)';
        ctx.lineWidth = 1.2;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(hx, hy, 12, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(212,175,55,0.25)';
        ctx.stroke();
      }

      // Rising gold dust
      particles.forEach((p) => {
        if (!reduceMotion) {
          p.y += p.vy;
          p.x += p.vx;
          if (p.y < -5) {
            p.y = height + 5;
            p.x = Math.random() * width;
          }
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232,207,160,${p.a * (0.6 + 0.4 * Math.sin(t + p.x))})`;
        ctx.fill();
      });
    };

    const loop = (now: number) => {
      if (!running) return;
      draw(now);
      raf = requestAnimationFrame(loop);
    };

    const onVisibility = () => {
      if (reduceMotion) return;
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!running) {
        running = true;
        raf = requestAnimationFrame(loop);
      }
    };

    resize();
    const ro = new ResizeObserver(() => {
      resize();
      if (reduceMotion) draw(performance.now());
    });
    ro.observe(canvas);
    document.addEventListener('visibilitychange', onVisibility);

    if (reduceMotion) draw(performance.now());
    else raf = requestAnimationFrame(loop);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className={`block w-full h-full ${className}`} aria-hidden="true" />;
};

export default DataFieldCanvas;
