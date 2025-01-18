# Executables (local)
DOCKER = docker
DOCKER_COMP = docker compose

# Container
CONTAINER_APP = app

# bun
BUN= $(DOCKER_COMP) exec $(CONTAINER_APP) bun

.DEFAULT_GOAL := help

help: ## Affiche cette aide
	@echo "Usage: make [target]"
	@echo
	@echo "Commands:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  %-15s %s\n", $$1, $$2}'

# ---------------------------------------------------------------------------------------------- #
.PHONY: help up down logs t run lint lint-fix test

up: ## Start a container
	$(DOCKER_COMP) up -d

down: ## Stop the container
	$(DOCKER_COMP) down --remove-orphans

logs: ## Show the logs of the container
	$(DOCKER_COMP) logs -f $(CONTAINER_APP)

t: ## Connect to the container
	$(DOCKER_COMP) exec $(CONTAINER_APP) bash

run: ## Run a command "c" in the container
	$(BUN) $(c)

lint: ## Start the linter
	$(BUN) lint

lint-fix: ## Start the linter and fix the errors
	$(BUN) lint:fix

test: ## Start the tests
	$(BUN) test

