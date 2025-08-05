---
layout: default
permalink: /definitions
title: Definitions
lang: en
nav_order: 1
toc: true
---

# Definitions
{: .no_toc }

In this section, I will explain the terms and proper names you will encounter in this guide, as well as while playing Nobihaza games.

## Table of Contents
{: .no_toc }

1. TOC
{:toc}

## About Nobihaza and RPG Maker

### Nobihaza

Also known as **Nobita no Biohazard**, **Nobita's Resident Evil**.

It is a term used to refer to fan-made RPG games based on the Doraemon series by Fujiko.F.Fujio and the Resident Evil (Biohazard) game by CAPCOM, containing horror elements that "ruin your childhood".

Nobihaza is not a series, as most games under the Nobihaza name are unrelated to each other.

### RPG Maker

A series of RPG game development software for computers by subsidiaries of the KADOKAWA group. Nobihaza uses these engines from the 2000 version up to the current RPG Maker MZ.

| Version | Development Company | Japanese Release Year | English Release Year | Notable Games |
| --- | --- | --- | --- | --- |
| RPG Maker 2000 | ASCII / Enterbrain | 2000 | 2015 | Nobihaza 1, Nobihaza 2 |
| RPG Maker 2003 | Enterbrain | 2002 | 2015 | Nobihaza G Rebirth |
| RPG Maker XP | Enterbrain | 2004 | 2005 | None |
| RPG Maker VX | Enterbrain | 2007 | 2008 | Nobihaza Zeta, Nobihaza Omega Kendin |
| RPG Maker VX Ace | Enterbrain | 2011 | 2012 | Nobihaza Insanity Destiny, Nobihaza The Dawn |
| RPG Maker MV | Kadokawa | 2015 | 2015 | Nobihaza 2 MV Remake |
| RPG Maker MZ | Gotcha Gotcha Games | 2020 | 2020 | None (yet) |

### RPG Maker Run Time Package (RTP)

These are runtime packages containing the basic libraries and resources to run RPG Maker games. Each engine will have a different RTP.

A few games will not require the RTP, but the majority of them will.

### Ruby Game Scripting System (RGSS)

A Ruby-based toolkit for programming scripts for RPG Maker XP, VX, and VX Ace games, and this is also the main scripting system of these engines.

Therefore, sometimes I will collectively call these three game engines "RGSS", because basically RPG Maker XP uses RGSS1, VX uses RGSS2, and VX Ace uses RGSS3.

### RGSS Player

The software used to play RPG Maker XP/VX/VX Ace games, developed by Enterbrain itself. It is usually included with these engines, and it is the `Game.exe` we often know when playing games made with those.

## Other definitions

### Windows

A paid and closed-source operating system for computers developed by Microsoft Corporation. It is the most popular operating system today, and also the one that most of us use.

### macOS

A proprietary and closed-source operating system developed by Apple Inc. Although the operating system itself is free, it can only be installed on Apple's Mac computers.

### Linux

Linux itself is just a kernel used by other operating systems. It is a free and open-source kernel initially developed by Linus Torvalds, and later by the Linux Foundation along with other contributors.

Due to the open nature of Linux, this kernel requires operating systems based on it to also be open-source, and we collectively call these operating systems "Linux distros".

### Linux distro

Refers to operating systems that use the Linux kernel, including Ubuntu, Linux Mint, Arch Linux, Fedora, Gentoo, etc.

Developers can add their own custom systems and features to these distros, as well as modify the original Linux kernel to optimize it for their distro.

Most current Linux distros are free and open-source, except for some special versions for enterprises.

### Android

The most popular operating system on mobile phones, used mainly by non-Apple phone manufacturers such as Samsung, Xiaomi, Oppo, Vivo, etc.

The original Android itself is an open-source operating system, but phone manufacturers can customize it and release their own specific proprietary version of the OS.

### iOS

A proprietary operating system that only supports Apple's mobile devices like iPhone, iPad, iPod, and cannot be installed on phones from other manufacturers.

### CPU (Central Processing Unit)

The central processing unit, the "brain" of the computer. It is used to handle calculations as well as sequential commands given by the user and the operating system.

### GPU (Graphical Processing Unit)

It is a separate processor for handling graphics tasks (outputting images, processing game graphics, video, etc.). Although it has a lower clock speed per core, it has a very large number of cores and specializes in parallel processing tasks.

### Integrated GPU (iGPU)

These are GPUs integrated directly into the CPU, and are mainly used when a computer does not have a discrete GPU. Because this type of GPU is integrated into the CPU, its performance is often far inferior to that of a discrete GPU.

Integrated GPUs do not have VRAM; instead, they use the computer's RAM, which is shared with that GPU.

### Discrete GPU (dGPU)

These are GPUs that are completely separate from the CPU (and when you build a desktop computer, you have to buy them separately). A discrete GPU has its own processor and VRAM, thus reducing the burden on the CPU.

### RAM (Random Access Memory)

The temporary internal memory of a computer, storing data for applications that are **currently running**. Although it has a very high speed, the data on RAM is erased after the computer is turned off.

Do not confuse it with **disk storage**, which is data stored on a hard drive and persists even after the computer has been turned off.

### VRAM (Video RAM)

A separate memory used to store graphics-related data for the GPU. It often has a higher speed than RAM, making it suitable for fast graphics processing.

### Clock speed

The speed at which a CPU can process tasks per second, measured in hertz (Hz).

1 Hz = 1 cycle per second. 1 GHz = 1,000 MHz = 1,000,000 kHz = 1,000,000,000 Hz.

### CPU core

An independent processing unit within the CPU. Each core can handle a separate task.

### Driver

A set of libraries that allow the operating system to communicate with the computer's hardware. Each piece of hardware on the computer will require a different set of drivers.

Each operating system will have a different way of installing drivers.

### Emulator

A type of software that emulates both the hardware and software of another platform or another computer, used to run software that is only supported on that platform with that specific hardware.

Because emulator software emulates hardware, performance will often be much lower than what your computer is capable of.

### Compatibility layer

Unlike an emulator, a compatibility layer only translates the commands of one platform to another while keeping the hardware structure the same.

Because it does not re-emulate the hardware, the performance loss is less than with an emulator. However, most compatibility layers require your machine's CPU to have the same architecture as the CPU of the platform you want to use.

### Virtual machine

A "computer" running inside a real machine, created by a hypervisor by directly sharing real hardware (CPU, RAM, I/O) with the guest OS.

Unlike emulators, virtual machines do not simulate CPUs of different architectures; instead, they run almost natively on the same CPU architecture, resulting in significantly higher performance.

The performance of a virtual machine will be higher than an emulator but lower than a compatibility layer.

### Desktop Environment (DE)

You will often see this term when using Linux.

Used to refer to a set of software that provides an user interface and experience, including a window manager, file manager, panel (similar to Windows' Taskbar or macOS's Menu Bar/Dock), settings, and additional applications.

Unlike Windows or macOS, you can install any Desktop Environment you want on Linux, as long as your distro supports it.

### DirectX

A graphics processing library used for communication between software and the GPU on the Windows operating system, developed by Microsoft.

DirectX also includes libraries for handling specific tasks, such as DirectAudio (sound processing), Direct3D (3D graphics processing), and DirectDraw.

### OpenGL/Vulkan

A graphics processing library that supports many different operating systems, developed by Khronos.

Vulkan is a separate graphics library also developed by Khronos, which serves as the successor to OpenGL.

### Metal

A proprietary graphics processing library by Apple that replaces OpenGL, and it only supports macOS.

### Ruby

A programming language used by RGSS-based engines (XP/VX/VX Ace).

### HTML

A hypertext markup language, considered the skeleton of a webpage. The latest version of HTML is version 5, from which we get the name HTML5.

### CSS

Another markup language, used to design the interface of a webpage.

### JavaScript

A programming language being most used for making webpages, and specifically used by RPG Maker MV/MZ.

HTML5 + CSS + JavaScript often go together to create a static webpage.

### NW.js

A tool to combine Node.js with HTML5, CSS, and JavaScript, very convenient for web programming while still wanting to interact with the system using Node.js.

This is also the tool used by RPG Maker MV/MZ to run games on the computer.

### Cordova

Like NW.js, this is also a tool that allows HTML5, CSS, and JavaScript to interact with the system. However, Cordova focuses more on mobile devices.

### Wine

This is not the drink, this is the name of a tool.

Wine is a compatibility layer that translates instructions for Windows into instructions for other operating systems, thereby allowing Windows applications to run on other operating systems.

### DXVK

A library that translates Windows' DirectX to Vulkan for use on other operating systems.

### EasyRPG

A compatibility layer used to run RPG Maker 2000/2003 games. This compatibility layer re-compiles the commands of these two engines to make them compatible with many platforms, as well as to optimize performance compared to the original RPG_RT.

Later, EasyRPG also added more features, notably multi-language support, and most Vietnamese Nobihaza translators have started translating games using this software.

### MKXP

A cross-platform compatibility layer used to run RPG Maker XP/VX/VX Ace games, similar to EasyRPG for RPG Maker 2000/2003. Although it does optimize performance compared to the original RGSS Player, its compatibility level is not yet high, especially on other platforms.

In new versions of MKXP, this compatibility layer has used Ruby 3 instead of 1.9.2 like the RGSS Player, so its compatibility with Nobihaza games has dropped even lower.

### JoiPlay

A free software that supports playing games made with many different engines on Android phones, including RPG Maker (except 2000/2003).

Specifically for RPG Maker XP/VX/VX Ace, JoiPlay also uses a modified version of MKXP to better support games on phones.

### RetroArch

A software that consolidates emulation tools and compatibility layers to support playing games from many different platforms and consoles.

EasyRPG also supports RetroArch, and RetroArch was a mandatory method for using EasyRPG on iOS before the official application was available.

## For developers

### APK

The format of an application installation file on Android.

### IPA

The format of a third-party application installation file on iOS.

### Sideload

A method to install third-party applications on a phone without going through the app store.

### Keystore

A key file used to authenticate and sign APK files.

### Key Pair

A key containing certificate information and a password used to sign APK files. A keystore can have multiple key pairs.

### Sign

Applications (both on computers and phones) need to be signed to avoid being considered unsafe. Some operating systems allow free signing, but some require payment to be able to sign applications.

### Root / Jailbreak

These are methods (Root for Android and Jailbreak for iOS) to bypass the operating system's security measures on a phone and allow us to do anything we want.

For Android, this could be removing system apps, modifying the kernel to a different version, changing machine performance settings, etc. For iOS, it could be expanding customization, modifying other applications, or being a method to **install third-party applications**.

Root / Jailbreak often carry many risks, so they should only be used when you can accept them and have no other choice.

### Package Manager

Can appear on any operating system, whether on a computer or a phone. However, for closed operating systems, Package Managers are often third-party applications:

* **Windows:** Chocolatey, winget
* **macOS:** Homebrew, MacPorts
* **Linux:** dpkg, apt, pacman, etc.
* **Android:** Usually determined by the Terminal Emulator you are using
* **iOS:** Sileo, Zebra, Cydia (with a user interface), dpkg (command line)