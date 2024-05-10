#!/bin/sh

echo "Backup nvim config"
mkdir -p ~/.config/nvim_backup
mkdir -p ~/.local/share/nvim_backup

cp -r ~/.config/nvim ~/.config/nvim_backup
cp -r ~/.local/share/nvim ~/.local/share/nvim_backup

echo "Remove previous nvim config"
rm -rf ~/.config/nvim
rm -rf ~/.local/share/nvim

echo "Install nvchad"
git clone https://github.com/NvChad/starter ~/.config/nvim

echo "Restore configuration"
cp -r ~/.config/nvim_backup ~/.config/nvim 
cp -r ~/.local/share/nvim_backup ~/.local/share/nvim 

rm -rf ~/.config/nvim_backup
rm -rf ~/.local/share/nvim_backup

nvim --headless -c "MasonInstallAll" -c "quitall"
