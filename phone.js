function searchPhone() {
    fetch('https://openapi.programming-hero.com/api/phones?search=$%7BsearchText%7D')
        .then(res => res.json())
        .then(data => console.log(data))
}