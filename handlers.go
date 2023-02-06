package main

import (
	"html/template"
	"net/http"
)

func indexHandler(w http.ResponseWriter, r *http.Request) {
	template := template.Must(template.ParseFiles("templates/index.html"))
	template.Execute(w, nil)

	// if r.Method == "POST" {
	// Check r.formvalue("username")
	//
	// }
}
