# Colors

RED = \033[1;31m
GREEN = \033[1;32m
YELLOW = \033[1;33m
BLUE = \033[1;34m
RESET = \033[0m

all: up

build:
	@echo "$(BLUE)██████████████████████ Building Images ███████████████████████$(RESET)"
	docker compose build

up:
	@echo "$(GREEN)██████████████████████ Running Containers ██████████████████████$(RESET)"
	@docker compose up -d
	@echo "$(RED)╔════════════════════════════║NOTE:║════════════════════════╗$(RESET)"
	@echo "$(RED)║   $(BLUE) You can see The Containers logs using $(YELLOW)make logs        $(RED)║$(RESET)"
	@echo "$(RED)╚═══════════════════════════════════════════════════════════╝$(RESET)"

down:
	@echo "$(RED)██████████████████ Removing All Containers ██████████████████$(RESET)"
	@docker compose down

start:
	@echo "$(RED)████████████████████ Starting Containers █████████████████████$(RESET)"
	docker compose start

stop:
	@echo "$(RED)████████████████████ Stoping Containers █████████████████████$(RESET)"
	docker compose stop

logs:
	@echo "$(GREEN)██████████████████████ Running Containers ██████████████████████$(RESET)"
	docker compose logs

prune: down
	@echo "$(RED)█████████████████████ Remove Everything ██████████████████████$(RESET)"
	@rm -rf ./node_modules
	@rm -rf ./dist
	# @docker system prune -f -a
	@docker rm -f postgres nats nats-box nestjs

re: prune all

.PHONY: all build up down start stop logs prune re