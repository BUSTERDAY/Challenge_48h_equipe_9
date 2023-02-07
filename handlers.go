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
			http.Redirect(w, r, "/buttons", http.StatusSeeOther)
		}
		http.Redirect(w, r, "/", http.StatusSeeOther)
		return
	}
	template := template.Must(template.ParseFiles("templates/index.html"))
	template.Execute(w, nil)
}

func kermitHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method == "POST" {
		if r.FormValue("answer") == "Bip Boup Eheh" {
			w.Write([]byte("/mountain"))
		}
		return
	}
	template := template.Must(template.ParseFiles("templates/kermit.html"))
	template.Execute(w, nil)
}

func captchaHandler(w http.ResponseWriter, r *http.Request) {
	template := template.Must(template.ParseFiles("templates/imghidden.html"))
	template.Execute(w, nil)

}

func robotTXT(w http.ResponseWriter, r *http.Request) {
	template := template.Must(template.ParseFiles("assets/img/robots.txt"))
	template.Execute(w, nil)
}

func buttonsHandler(w http.ResponseWriter, r *http.Request) {
	template := template.Must(template.ParseFiles("templates/buttons.html"))
	template.Execute(w, nil)
}

func mountainHandler(w http.ResponseWriter, r *http.Request) {
	template := template.Must(template.ParseFiles("templates/mountain.html"))
	template.Execute(w, nil)
}

func hiddenHandler(w http.ResponseWriter, r *http.Request) {
	template := template.Must(template.ParseFiles("templates/hidden.html"))
	template.Execute(w, nil)
}

var cookieTries = 0
var cookieFound = false

func cookieHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method == "POST" && r.FormValue("cookie") != "" {

		if r.FormValue("cookie") == "chocolateCookie" {
			w.Write([]byte("Nice !! Go to /kermit now."))
			return
		} else {
			if (r.FormValue("cookie") == "evcmwpcrtJsfmws") || ((r.FormValue("cookie") == "evcmwpcrtJsfmws") && cookieFound && cookieTries < 3) {
				w.Write([]byte("Mh... This doesn't really look like a cookie to me.\nIf it's a cookie, it's definitely been shattered, you must do something about it."))
				cookieFound = true
				cookieTries++
				return
			}
			if cookieFound && cookieTries >= 3 && cookieTries < 5 {
				w.Write([]byte("... What even happened to that cookie ?? I see you're trying your best at least...\nEach part looks like a normal cookie bit, don't you think ?\n\nIf only we had the key to solve it..."))
				cookieTries++
				return
			} else if cookieFound && cookieTries >= 5 {
				w.Write([]byte("Needless to say that the key has been very close to the cookie jar all this time...\nIf you really can't find it, head back to the one who asked you the cookie.[https://fr.wikipedia.org/wiki/Chiffrement_par_substitution]"))
				cookieTries++
				return
			}
			cookieTries++
			w.Write([]byte("Have you found the cookie ? Do you even know where to find it ?"))
			return
		}
	}
	cookie := &http.Cookie{
		Name:  "COOKIECYPHER",
		Value: "evcmwpcrtJsfmws",
	}
	http.SetCookie(w, cookie)
	template := template.Must(template.ParseFiles("templates/whoAmI.html"))
	template.Execute(w, nil)
}
