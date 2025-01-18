#!/bin/sh
set -e

# Vérifie si le projet existe déjà
if [ ! -f "package.json" ]; then
    echo "No project found. Creating a new React project at the root..."

    # Créer un projet React à la racine
    bun create vite "tmp" --template react-ts --force --yes

    # Copier les fichiers du projet dans le répertoire actuel
    cp -r tmp/* .
    rm -rf tmp/

    # Installer les dépendances
    echo "Installing dependencies..."
    bun install

    # Option pour forcer une version de React
    if [ -n "$REACT_VERSION" ]; then
        echo "Setting React version to: $REACT_VERSION"
        bun add react@$REACT_VERSION react-dom@$REACT_VERSION
    fi

    echo "React project created successfully."
else
    echo "Project found. Verifying dependencies..."

    # Vérifie si les dépendances sont installées
    if [ -z "$(ls -A 'node_modules' 2>/dev/null)" ]; then
        echo "node_modules is empty, installing dependencies..."
        bun install --frozen-lockfile
    else
        echo "node_modules already exists, skipping installation."
    fi
fi

exec "$@"
