package mailer

import (
	"html/template"
	"io"

	"github.com/wneessen/go-mail"
)

const (
	welcomeMailKey = "welcome_mail"
	sender         = "noreply@localhost.com"
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
	client    *mail.Client
	templates map[string]*template.Template
}

// NewMailer creates a new mailer
func NewMailer() (*Mailer, error) {
	tpls, err := setUpTemplates()
	if err != nil {
		return nil, err
	}

	c, err := mail.NewClient(
		"localhost",
		mail.WithPort(1025),
		mail.WithTLSPolicy(mail.NoTLS),
	)

	if err != nil {
		return nil, err
	}

	return &Mailer{
		client:    c,
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

func (mailer *Mailer) SendWelcomeMail(to string, data WelcomEmailData) error {
	m := mail.NewMsg()
	m.From(sender)
	m.To(to)
	m.Subject("Welcome to " + data.Company)
	m.SetBodyHTMLTemplate(mailer.templates[welcomeMailKey], data)

	err := mailer.client.DialAndSend(m)
	return err
}
