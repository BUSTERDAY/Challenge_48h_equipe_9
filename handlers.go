package main

import (
	"fmt"
	"html/template"
	"net/http"
)

func indexHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method == "POST" {
		fmt.Println(r.FormValue("username"), r.FormValue("password"))
		if r.FormValue("username") == "elephant" && r.FormValue("password") == "BravoTuAsTrouveLeMDP" {
			http.Redirect(w, r, "/kermit", http.StatusSeeOther)
		}
		http.Redirect(w, r, "/", http.StatusSeeOther)
		return
	}
	template := template.Must(template.ParseFiles("templates/index.html"))
	template.Execute(w, nil)
}

func kermitHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method == "POST" && r.FormValue("answer") == "Bip Boup Eheh" {
		fmt.Println("Alright")
		w.Write([]byte("Success"))
		return
	}
	template := template.Must(template.ParseFiles("templates/kermit.html"))
	template.Execute(w, nil)

}

func robotTXT(w http.ResponseWriter, r *http.Request) {
	template := template.Must(template.ParseFiles("robots.txt"))
	template.Execute(w, nil)
}
