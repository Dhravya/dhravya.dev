"use client";

import { SpeakerWaveIcon, PauseCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

function Name() {
  const [isSpeaking, setIsSpeaking] = React.useState(false);
  const [audio, setAudio] = React.useState<HTMLAudioElement | null>(null);

  const PRONUNCIATION_URL = "/p.mp3";

  return (
    <button
      onClick={() => {
        let tempAudio
        if (!audio) {
          const audio_ = new Audio(PRONUNCIATION_URL)
          audio_.addEventListener('ended', () => {
            setIsSpeaking(false)
            audio_.currentTime = 0
          })
          audio_.addEventListener('pause', () => {
            setIsSpeaking(false)
            audio_.currentTime = 0
          })
          audio_.addEventListener('play', () => {
            audio_.currentTime = 0
            setIsSpeaking(true)
          })

          tempAudio = audio_
          setAudio(audio_)
        }

        if (!audio && !tempAudio) {
          alert('No audio')
          return
        }

        const use = audio || tempAudio
        if (isSpeaking) {
          use.pause()
        }

        if (!isSpeaking) {
          use.play()
        }
      }}
      className="gap-2 inline-flex items-center italic text-slate-500 hover:text-slate-400"
    >
      {!isSpeaking ? (
        <SpeakerWaveIcon className="h-4 w-4" />
      ) : (
        <PauseCircleIcon className="h-4 w-4" />
      )}
      drah-vhyaa
    </button>
  )
}

export default Name;
