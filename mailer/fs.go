package mailer

import (
	"embed"
	"io/fs"
)

//go:embed templates/*
var embedded embed.FS
var templateFS, _ = fs.Sub(embedded, "templates")
