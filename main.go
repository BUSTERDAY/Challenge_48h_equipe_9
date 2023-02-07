package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	static := http.FileServer(http.Dir("assets"))
	http.Handle("/assets/", http.StripPrefix("/assets/", static))

	http.HandleFunc("/", indexHandler)
	http.HandleFunc("/kermit", kermitHandler)
	http.HandleFunc("/robots.txt", robotTXT)
	http.HandleFunc("/buttons", buttonsHandler)
	http.HandleFunc("/mountain", mountainHandler)
	http.HandleFunc("/whoAmI", cookieHandler)
	// Launches the server:
	preferredPort := ":8080"
	fmt.Printf("Starting server at port %v\n", preferredPort)
	if err := http.ListenAndServe(preferredPort, nil); err != nil {
		log.Fatal(err)
	}
}
