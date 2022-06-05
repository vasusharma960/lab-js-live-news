function showdropdown() {
    var drop = document.getElementById('country')
    if (drop.style.visibility === 'hidden') {
        drop.style.visibility = 'visible'
    }
    else {
        drop.style.visibility = 'hidden'
    }
}

function india(){
    let country = 'in'
    news(country)
    document.getElementById('country').style.visibility = 'hidden'
}

function us()
{
    let country='us'
    news(country)
    document.getElementById('country').style.visibility = 'hidden'
}
const apikey = "90352d41ce084c368014870a2e754638";
function news(country) {
    console.log(country)

    axios
        .get(
            `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apikey}`
        )
        .then((response) => {

            console.log(response)
            let section = document.querySelector('section')
            section.innerHTML=''
            if (response.data.articles.length) {
                response.data.articles.forEach(news => {

                    if (news.description && news.title && news.urlToImage)
                    {
                        let div = document.createElement('div')
                        div.classList.add('card')

                        let img = document.createElement('img')
                        img.setAttribute('src',news.urlToImage)
                        img.setAttribute('alt',"Image")
                        div.appendChild(img)

                        let heading = document.createElement('h5')
                        let headingText = document.createTextNode(news.title)
                        heading.appendChild(headingText)
                        div.appendChild(heading)

                        let content = document.createElement('p')
                        let contentText = document.createTextNode(news.description)
                        content.appendChild(contentText)
                        div.appendChild(content)

                        let readlink = document.createElement('a')
                        let readText = document.createTextNode('Read More')
                        readlink.setAttribute('href',news.url)
                        readlink.appendChild(readText)
                        div.appendChild(readlink)
                        section.appendChild(div)
                    }

                    else{
                        let div = document.createElement('div')
                        div.classList.add('card')

                        let img = document.createElement('img')
                        img.setAttribute('src', "https://i.stack.imgur.com/WeyM8.jpg")
                        img.setAttribute('alt', "image")
                        div.appendChild(img)

                        let heading = document.createElement('h5')
                        let headingText = document.createTextNode('no news to show')
                        heading.appendChild(headingText)
                        div.appendChild(heading)

                        let content = document.createElement('p')
                        let contentText = document.createTextNode('Will update soon when avaliable')
                        content.appendChild(contentText)
                        div.appendChild(content)

                        section.appendChild(div)
                    }
                })
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    }
