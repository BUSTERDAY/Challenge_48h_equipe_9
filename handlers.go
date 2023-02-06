package main

import (
	"fmt"
	"html/template"
	"net/http"
)

func indexHandler(w http.ResponseWriter, r *http.Request) {
	template := template.Must(template.ParseFiles("templates/index.html"))
	template.Execute(w, nil)

	if r.Method == "POST" {
		if r.FormValue("username") == "elephant" && r.FormValue("password") == "b" {
			fmt.Println("juste")
		} else {
			fmt.Println("faux")
		}

	}
}
