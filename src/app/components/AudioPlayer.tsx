"use client";

import { useRef, useState, useEffect } from "react";

const BAR_COUNT = 28;
const FIXED_HEIGHTS = [
  0.6,0.3,0.8,0.5,0.9,0.4,0.7,0.2,1.0,0.5,0.6,0.8,0.3,0.7,
  0.5,0.9,0.4,0.6,0.8,0.3,0.7,0.5,1.0,0.4,0.6,0.9,0.3,0.7,
];

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => setCurrent(audio.currentTime);
    const onLoad = () => setDuration(audio.duration);
    const onEnded = () => setPlaying(false);
    const onError = () => setError(`Could not load audio (code ${audio.error?.code})`);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onLoad);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("error", onError);
    audio.load();
    audio.volume = 1;
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onLoad);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("error", onError);
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        audio.volume = 1;
        audio.muted = false;
        await audio.play();
        setPlaying(true);
      } catch (err) {
        setError(`Playback failed: ${err instanceof Error ? err.message : err}`);
      }
    }
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.currentTime = ratio * duration;
  };

  const fmt = (s: number) => {
    if (!isFinite(s) || isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const progress = duration ? current / duration : 0;

  return (
    <div
      className="w-full max-w-xl mx-auto rounded-3xl p-8 flex flex-col items-center gap-6"
      style={{
        background: "rgba(255,255,255,0.07)",
        backdropFilter: "blur(24px) saturate(180%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
        border: "1px solid rgba(255,255,255,0.13)",
        boxShadow: "0 8px 40px rgba(0,200,255,0.1), inset 0 1px 0 rgba(255,255,255,0.15)",
      }}
    >
      {/* Audio element — always in DOM so ref is available in useEffect */}
      <audio ref={audioRef} preload="metadata" style={{ display: "none" }}>
        <source src="/chap3audio.mp3" type="audio/mpeg" />
      </audio>

      {/* Label */}
      <div className="text-center">
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-cyan-400 mb-1">
          Free Audio Teaser
        </p>
        <p
          className="text-2xl font-black text-white tracking-widest"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          Chapter 3
        </p>
      </div>

      {/* Waveform bars */}
      <div className="flex items-end gap-[3px] h-14 w-full justify-center">
        {FIXED_HEIGHTS.slice(0, BAR_COUNT).map((h, i) => {
          const played = i / BAR_COUNT < progress;
          return (
            <div
              key={i}
              className="rounded-full"
              style={{
                width: "6px",
                height: `${14 + h * 28}px`,
                background: played ? "rgba(0,220,255,0.9)" : "rgba(255,255,255,0.2)",
                animation: playing
                  ? `bar-pulse ${0.5 + h * 0.7}s ease-in-out ${i * 0.03}s infinite alternate`
                  : "none",
                transformOrigin: "bottom",
                transition: "background 0.2s",
              }}
            />
          );
        })}
      </div>

      {/* Progress bar */}
      <div className="w-full">
        <div
          className="w-full h-1.5 rounded-full cursor-pointer"
          style={{ background: "rgba(255,255,255,0.15)" }}
          onClick={seek}
        >
          <div
            className="h-1.5 rounded-full"
            style={{
              width: `${progress * 100}%`,
              background: "linear-gradient(90deg, #06b6d4, #0ea5e9)",
              boxShadow: "0 0 8px rgba(6,182,212,0.7)",
              transition: "width 0.15s linear",
            }}
          />
        </div>
        <div
          className="flex justify-between mt-1.5 text-xs text-white/40"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          <span>{fmt(current)}</span>
          <span>{fmt(duration)}</span>
        </div>
      </div>

      {/* Play / Pause button */}
      <button
        onClick={toggle}
        aria-label={playing ? "Pause" : "Play"}
        className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none active:scale-95"
        style={{
          background: "linear-gradient(135deg, #06b6d4 0%, #0284c7 100%)",
          boxShadow: playing
            ? "0 0 32px rgba(6,182,212,0.7), 0 0 0 4px rgba(6,182,212,0.2)"
            : "0 4px 20px rgba(6,182,212,0.4)",
        }}
      >
        {playing ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <rect x="5" y="4" width="4" height="16" rx="1" />
            <rect x="15" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <polygon points="6,3 20,12 6,21" />
          </svg>
        )}
      </button>

      {error && (
        <p className="text-red-400 text-xs text-center">{error}</p>
      )}

      <style>{`
        @keyframes bar-pulse {
          from { transform: scaleY(0.5); }
          to   { transform: scaleY(1.3); }
        }
      `}</style>
    </div>
  );
}
