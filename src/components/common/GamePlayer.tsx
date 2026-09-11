"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/common/Icon";
import { siteConfig } from "@/config/site";
import styles from "@/style/common/game-player.module.css";

export function GamePlayer() {
  const [gameState, setGameState] = useState<"ready" | "loading" | "loaded" | "failed">("ready");
  const [theaterMode, setTheaterMode] = useState(false);
  const playerRef = useRef<HTMLDivElement>(null);
  const loadTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function clearLoadTimer() {
    if (loadTimerRef.current) {
      clearTimeout(loadTimerRef.current);
      loadTimerRef.current = null;
    }
  }

  function startGame() {
    clearLoadTimer();
    setGameState("loading");
    loadTimerRef.current = setTimeout(() => setGameState("failed"), 15000);
  }

  function handleGameLoad() {
    clearLoadTimer();
    setGameState("loaded");
  }

  function handleGameError() {
    clearLoadTimer();
    setGameState("failed");
  }

  useEffect(() => {
    if (!theaterMode) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [theaterMode]);

  useEffect(() => {
    function exitTheaterWithEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && document.fullscreenElement === null) setTheaterMode(false);
    }

    window.addEventListener("keydown", exitTheaterWithEscape);
    return () => window.removeEventListener("keydown", exitTheaterWithEscape);
  }, []);

  useEffect(() => clearLoadTimer, []);

  async function enterFullscreen() {
    await playerRef.current?.requestFullscreen?.();
  }

  return (
    <div className={`${styles.player} ${theaterMode ? styles.theater : ""}`} ref={playerRef}>
      <div className={styles.shell} aria-busy={gameState === "loading"}>
        {gameState !== "ready" && gameState !== "failed" && (
          <iframe
            className={styles.iframe}
            src={siteConfig.embeddedGameUrl}
            title="Play Narinig Mo Ba"
            allow="autoplay; fullscreen; gamepad"
            allowFullScreen
            onLoad={handleGameLoad}
            onError={handleGameError}
          />
        )}
        {gameState !== "loaded" && (
          <>
            <Image
              className={styles.cover}
              src="/images/home/store-interior.webp"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 68vw"
            />
            <div className={styles.scrim} />
            {gameState === "ready" && (
              <button className={styles.launch} type="button" onClick={startGame} aria-label="Play Narinig Mo Ba in this page">
                <span className={styles.launchPanel}>
                  <span className={styles.launchArtwork}>
                    <Image src="/images/home/hero.webp" alt="" fill sizes="112px" />
                  </span>
                  <span className={styles.playNow}>Play Now</span>
                </span>
              </button>
            )}
            {gameState === "loading" && (
              <div className={styles.feedback} role="status" aria-live="polite">
                <span className={styles.loadingIndicator} aria-hidden="true" />
                <span>Loading game…</span>
              </div>
            )}
            {gameState === "failed" && (
              <div className={styles.feedback} role="alert">
                <span>The game is taking longer than expected.</span>
                <button className={styles.retryButton} type="button" onClick={startGame}>Try Again</button>
              </div>
            )}
          </>
        )}
      </div>
      <div className={styles.statusBar} aria-label="Game viewing controls">
        <span className={styles.gameName}>Narinig Mo Ba</span>
        <div className={styles.statusActions}>
          <button
            className={styles.iconButton}
            type="button"
            onClick={() => setTheaterMode((active) => !active)}
            aria-label={theaterMode ? "Exit webpage fullscreen" : "Enter webpage fullscreen"}
            aria-pressed={theaterMode}
            title={theaterMode ? "Exit webpage fullscreen" : "Webpage fullscreen"}
          >
            <Icon name="theater" size={19} />
          </button>
          <button className={styles.iconButton} type="button" onClick={enterFullscreen} aria-label="Enter fullscreen" title="Fullscreen">
            <Icon name="maximize" size={19} />
          </button>
        </div>
      </div>
    </div>
  );
}
