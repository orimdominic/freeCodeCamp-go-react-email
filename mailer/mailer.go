package mailer

import (
	"html/template"
	"io"
)

const (
	welcomeMailKey = "welcome_mail"
)

func setUpTemplates() (map[string]*template.Template, error) {
	templates := make(map[string]*template.Template)

	tmpl := template.New("welcome.html").Delims("((", "))")
	welcomeEmailTmpl, err := tmpl.ParseFS(templateFS, "welcome.html")
	if err != nil {
		return nil, err
	}

	templates[welcomeMailKey] = welcomeEmailTmpl

	return templates, nil
}

type Mailer struct {
	templates map[string]*template.Template
}

// NewMailer creates a new mailer
func NewMailer() (*Mailer, error) {
	tpls, err := setUpTemplates()
	if err != nil {
		return nil, err
	}

	return &Mailer{
		templates: tpls,
	}, nil
}

type WelcomEmailData struct {
	Username string
	Company  string
	Gophers  []string
}

func (mailer *Mailer) WriteWelcomeMail(w io.Writer, data WelcomEmailData) error {
	tmpl := mailer.templates[welcomeMailKey]
	err := tmpl.Execute(w, data)

	return err
}
