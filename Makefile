dev:
	docker-compose -f docker-compose-dev.yaml up --build -V

deploy:
	docker-compose up -d