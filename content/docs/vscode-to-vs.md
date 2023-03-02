+++
title = "vscode-to-vs"
date = 2023-03-02
description = "Documentation for the vscode-to-vs utility command"

[extra]
github = "https://github.com/wzid/vscode-to-vs"
+++

This command allows you to create the files needed for a Visual Studio C++ project. Mostly for operating systems that do not support Visual Studio C++ development.

<br>

# Showcase

<div class="showcase">
  <img class="showcase-img" src="/images/docs/vscode-to-vs/input.png" style="width:50%"> 
  <img class="showcase-img" src="/images/docs/vscode-to-vs/result.png" style="width:30%">
</div>
<br>

# Installation

> #### Make sure you are using the zsh terminal
> [How to switch to zsh terminal](https://support.apple.com/en-us/HT208050)

1. Download [install.sh](https://github.com/wzid/vscode-to-vs/releases/latest/download/install.sh)

2. Once downloaded, type `sh`  into the terminal and then drag the `install.sh` file into the terminal. The command should look like `sh /Users/NAME/Downloads/install.sh`

3. The script should download the `vscode-to-vs` executable and put it in your **PATH**

4. Restart your terminal when the script finishes running

# Usage

Since the command was added to your **PATH**, you can now use the command:

`vscode-to-vs [ProjectName] ["File Path"]`

The file path should be the path to the folder that holds all the VS Code C++ files

<br>

### Example:

`vscode-to-vs Lab10 "/Users/wzid/Documents/Lab 10"`

A new folder will be created inside the original folder with all of the files ready to be zipped


