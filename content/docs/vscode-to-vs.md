+++
title = "vscode-to-vs"
date = 2023-04-03
description = "Documentation for the vscode-to-vs utility command"

[extra]
github = "https://github.com/wzid/vscode-to-vs"
+++

This command allows you to create the files needed for a Visual Studio C++ project. Mostly for operating systems that do not support Visual Studio C++ development.
# Showcase
<div class="showcase">
  <img class="showcase-img" src="/images/docs/vscode-to-vs/input.png" style="width:50%"> 
  <img class="showcase-img" src="/images/docs/vscode-to-vs/result.png" style="width:30%">
</div>
<br>

<div class="heading-quote">

  # Installation

  > Make sure you have [Homebrew](https://brew.sh) installed on your Mac

</div>

Run `brew install wzid/tap/vscode-to-vs`

# Usage

Since the command was added to your **PATH**, you can now use the command:

`vscode-to-vs [ProjectName] ["File Path"]`

The file path should be the path to the folder that holds all the VS Code C++ files

<br>

### Example:

`vscode-to-vs Lab10 "/Users/wzid/Documents/Lab 10"`

A new folder will be created inside the original folder with all of the files ready to be zipped


