---
layout: default
permalink: /status
title: Support status
lang: en
nav_order: 4
toc: true
---

# Support status
{: .no_toc }

As of my assessment on August 5, 2025, the playability of Nobihaza games on various devices is as follows:

## Table of Contents
{: .no_toc }

1. TOC
{:toc}

## Windows

For Windows, there isn't much to say, as all Nobihaza games support Windows.

### RPG Maker 2000/2003

> All games are supported, but some libraries need to be installed and some settings need to be adjusted.

Most games will require you to install the runtime package (RTP) and change the device's region to Japanese before playing. Please read the **Basic Requirements** section for your operating system for more details.

With the exception of **Nobita no Senki ACE** (as this game uses some complex scripts and may be unstable), all Japanese and English games can be played on the **EasyRPG** compatibility layer without any modifications, with an experience no different from the original `RPG_RT.exe`.

If you want the original experience without going through any software, you can also change your device's region to Japan and play the game using the original `RPG_RT.exe` file.

### RPG Maker XP/VX/VX Ace

> All games are supported, but some libraries need to be installed.

All Nobihaza games made with these engines will support Windows, regardless of whether the game uses RGSS Player or MKXP to run.

However, you should also install the game's RTP (mentioned in the **Basic Requirements** section) for the best game experience.

### RPG Maker MV/MZ

> All games are supported.

Similar to RPG Maker XP/VX/VX Ace, you will almost never have to install any additional libraries. However, RPG Maker MV games will require quite high system specs, so make sure your machine is powerful enough to play them.

## macOS

### RPG Maker 2000/2003

> 90% of games can be played stably through support tools.

* It is recommended to use EasyRPG for the best game experience, as EasyRPG is officially supported on macOS. However, some games will still not run, or will run unstably as I mentioned in the Windows section.

* You can still use Wine (Kegworks or CrossOver) to play the `RPG_RT.exe` file directly, but I do not recommend this method as the stability is not high. You should only try this method if the game you want to play cannot be played with EasyRPG.

### RPG Maker XP/VX/VX Ace

> Almost no games can run stably, even with support tools.

These games are divided into 2 types: **RGSS Player** (run with the original `Game.exe` file) and **MKXP** (mkxp-z, a compatibility layer for RPG Maker XP/VX/VX Ace).

* You must use Wine (Kegworks or CrossOver) to play these games using the original `Game.exe` file. However, RGSS Player uses DirectX 9 (not DirectX 10 or 11), so the game will run very slowly because DXVK cannot operate on DirectX 9 and must use WineD3D as a replacement.<br>Even CrossOver cannot save this situation.

* Some machines will not be able to play MIDI music if played through Wine.

* It is possible to use MKXP (which supports macOS), but at the moment, almost no Nobihaza games can run with MKXP on macOS. I will do more research to fix this issue, but it will take a very long time.

### RPG Maker MV/MZ

> Most games can be played stably through support tools. Very fortunate.

The nature of these games is that they are based on NW.js (Node.js + HTML5), and NW.js supports macOS; so basically, you can run these games on macOS without going through Wine or any other compatibility layer. Therefore, the gaming experience will be no different from other operating systems.

However, there are still some games that use Windows-specific libraries and will not be playable without modifying the game's data.

## Linux

Fortunately, most games can run on Linux, because Wine on Linux is much more stable than on macOS.

### RPG Maker 2000/2003

> Most games can run stably through support tools.

* It is recommended to use EasyRPG for the best game experience, as EasyRPG is officially supported on Linux. However, some games will still not run, or will run unstably as I mentioned in the Windows section.

* You can still use Wine to play the `RPG_RT.exe` file directly, but I do not recommend this method as the stability is not high. You should only try this method if the game you want to play cannot be played with EasyRPG.

### RPG Maker XP/VX/VX Ace

> Most games can run stably through support tools.

These games are divided into 2 types: **RGSS Player** (run with the original `Game.exe` file) and **MKXP** (mkxp-z, a compatibility layer for RPG Maker XP/VX/VX Ace).

* Fortunately, DXVK on Linux does not have the same issues as on macOS, so I still recommend you run games with the `Game.exe` file through Wine, until MKXP is stable enough to run on Linux.

* MKXP on Linux is not much different from on macOS; most games are also incompatible with Linux at the moment.

### RPG Maker MV/MZ

> Most games can run stably through support tools. Some games will not run at all.

No different from macOS.

## Android

Fortunately, Android has a tool called JoiPlay, and it supports almost all RPG Maker games. EasyRPG is no exception.

### RPG Maker 2000/2003

> Most games can run stably through support tools. Some games will not run at all.

* You must play all games using EasyRPG. I have already discussed its support capability in the Windows section; it is similar for other operating systems.

* For games that cannot run on EasyRPG, there is no other way. You must have a computer.

### RPG Maker XP/VX/VX Ace

> Most games can run stably through support tools. Some games will not run at all.

* JoiPlay has ported MKXP for Android extremely well, so most games can now be played through MKXP on JoiPlay, with even better stability than MKXP on macOS and Linux.

* For games that cannot run through JoiPlay (due to special encryption mechanisms, or having Windows-specific libraries), there is no other way. You must have a computer.

### RPG Maker MV/MZ

> Most games can run stably through support tools. Some games will not run at all.

* JoiPlay has ported a part of NW.js to Android, so you can now play most of these types of games on Android; but the stability will not be as good as on a computer because NW.js cannot be fully ported to mobile devices.

* For games that use Windows-specific libraries, they will not run at all, and you must either modify the game or have a computer.

## iOS

Thanks a lot, Apple. Because of iOS's closed nature, almost no Nobihaza games can run stably.

Like other third-party iOS applications, you need a computer, or an app that supports installing third-party apps, to install the support tools; and you will usually have to reinstall them every 7 days.

### RPG Maker 2000/2003

> Most games can be run through support tools, but they will not be as stable as on other operating systems, and some games will not run at all.

* On January 11, 2024, I uploaded a test version of EasyRPG for iOS (even before the EasyRPG development team did!), and since then, many old Nobihaza games have become playable on iOS; although with some caveats compared to other operating systems:
    * EasyRPG runs through RetroArch and does not have its own separate app, so some things will depend on RetroArch. You should also read the RetroArch user guide.
    * Some games will not be able to save progress.

* The remaining games will not run on iOS at all.

### RPG Maker XP/VX/VX Ace

> **No games run on iOS at all.** Once again, thank you very much, Apple.

I am researching to develop an MKXP version for iOS, but I don't know when it will be finished because it requires a lot of time and effort.

### RPG Maker MV/MZ

> **It's possible to run them, but you need a MacBook, an iPhone/iPad, and an understanding of iOS app development.**

The nature of these games is that they are made with JavaScript, so you can still port the game to iOS in the same way that [**Doraemon: Nobita's Resident Evil 2 (Vietnamese)**](https://nobi2.s1432.org) did, by putting the game into an embedded browser (which could be WKWebView or UIWebView). However, this method requires you to have a MacBook, an iPhone/iPad, and some understanding of iOS app development/JavaScript to be able to fix errors during the porting process.

I will not provide a guide for this. If you are curious, you can find guides on the Internet.

I also have plans to make a launcher for iOS in the future. You can read more in the [FAQ](./faq#is-there-a-way-to-play-rpg-maker-mvmz-games-on-ios-without-having-to-build-them-myself).