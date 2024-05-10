#!/bin/sh

export GO_VERSION=1.22.1

echo "Installing Golang"
echo "Remove old version"
 
wget https://go.dev/dl/go$GO_VERSION.linux-amd64.tar.gz
sudo rm -rf /usr/local/go 
sudo tar -C /usr/local -xzf go$GO_VERSION.linux-amd64.tar.gz

# Install gopls
/usr/local/go/bin/go install golang.org/x/tools/gopls@latest