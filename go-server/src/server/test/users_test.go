package test

import (
	"net/http"
	"testing"
)

func TestSimpleGetUserWithoutAuth(t *testing.T) {
	req, _ := http.NewRequest("GET", "/user", nil)
	response := executeRequest(req, SimpleContext)

	checkResponseCode(t, http.StatusUnauthorized, response.Code)
}
