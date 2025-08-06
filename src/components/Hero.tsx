"use client";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import useOnScreen from "../utils/IsOnScreen";

export function Hero() {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useOnScreen(ref1);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying && videoRef.current) {
      videoRef.current.play();
    }
  }, [isPlaying]);

  return (
    <div className="mx-auto flex h-[calc(100vh-80px)] w-11/12 flex-col items-center justify-center">
      <div
        ref={ref1}
        className="relative flex h-[90%] w-full flex-col items-center justify-center overflow-hidden rounded-3xl shadow-md shadow-secondary"
      >
        <video
          autoPlay
          loop
          muted
          className={twMerge(
            "absolute left-0 top-0 h-full w-full object-cover",
            isPlaying
              ? "pointer-events-none opacity-0 transition duration-500"
              : "pointer-events-auto opacity-100 transition duration-500",
          )}
          src="/video2.mp4"
        />
        <video
          ref={videoRef}
          controls
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          className={twMerge(
            "pointer-events-none absolute left-0 top-0 h-full w-full cursor-pointer object-cover opacity-0",
            isPlaying
              ? "pointer-events-auto opacity-100 transition duration-500"
              : "pointer-events-none opacity-0 transition duration-500",
          )}
          src="/aula-dr.mp4"
        />
        <div
          className={twMerge(
            "absolute h-full w-full bg-secondary/70",
            isPlaying
              ? "pointer-events-none opacity-0 transition duration-500"
              : "pointer-events-auto opacity-100 transition duration-500",
          )}
        />
        <div
          className={twMerge(
            "z-10 flex flex-col items-center justify-center gap-4 px-4 text-center text-white lg:w-2/3 lg:px-0",
            isPlaying
              ? "pointer-events-none opacity-0"
              : "pointer-events-auto opacity-100",
          )}
        >
          <span
            className={twMerge(
              "-translate-x-20 font-semibold leading-normal opacity-0 transition delay-[250ms] duration-[600ms] lg:text-2xl",
              isVisible1.isIntersecting && "translate-x-0 opacity-100",
            )}
          >
            Parabéns Advogado
          </span>
          <span
            className={twMerge(
              "-translate-x-20 text-xl font-semibold leading-normal opacity-0 transition delay-[250ms] duration-[600ms] lg:text-4xl",
              isVisible1.isIntersecting && "translate-x-0 opacity-100",
            )}
          >
            Acesso Liberado!
          </span>
          <span
            className={twMerge(
              "opacity-0 transition delay-500 duration-[600ms] lg:text-xl xl:w-1/2",
              isVisible1.isIntersecting && "opacity-100",
            )}
          >
            Veja agora como a Inteligência Artificial pode transformar seu
            escritório e aumentar a eficiência com práticas modernas e
            estratégicas na advocacia.
          </span>
          <div
            className={twMerge(
              "flex flex-col items-center gap-4 opacity-0 transition delay-700 duration-[600ms] lg:flex-row",
              isVisible1.isIntersecting && "opacity-100",
            )}
          >
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={twMerge(
                "flex items-center gap-2 rounded-xl border bg-white p-4 font-semibold text-primary transition duration-200 hover:-translate-y-0.5 hover:scale-[1] hover:border-white hover:bg-transparent hover:text-white",
                isPlaying
                  ? "pointer-events-none opacity-0"
                  : "pointer-events-auto opacity-100",
              )}
            >
              Acessar Material
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
