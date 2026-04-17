run: email-build
	go run cmd/main.go

email-build: mailer/_emails
	npm --prefix mailer/_emails run export
