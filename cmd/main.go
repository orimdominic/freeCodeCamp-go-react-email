package main

import (
	"fmt"
	"net/http"
	"os"

	pkgMailer "github.com/orimdominic/freeCodeCamp-go-react-email/mailer"
)

func main() {
	mailer, err := pkgMailer.NewMailer()
	if err != nil {
		fmt.Fprint(os.Stderr, err)
		os.Exit(1)
	}

	http.HandleFunc("/mail", func(w http.ResponseWriter, r *http.Request) {
		username := r.URL.Query().Get("username")
		company := r.URL.Query().Get("company")
		gophers := []string{"Tinky Winky", "Dipsy", "Laa-Laa", "Po"}

		err := mailer.WriteWelcomeMail(w, pkgMailer.WelcomEmailData{
			Username: username,
			Company:  company,
			Gophers:  gophers,
		})
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
	})

	port := ":8888"
	fmt.Printf("Server running on %s\n", port)
	http.ListenAndServe(port, nil)
}
