

// https://dummyjson.com/products/categories

// https://dummyjson.com/products

// https://dummyjson.com/products/category/furniture

// https://cdn.dummyjson.com/product-images/1/thumbnail.jpg


let divUl = document.querySelector(".mainDiv_mid .mainDiv_mid_left >ul")


// Abhi Yeh Humne Catogery banaya hai uske baad hum dusra function banayenge joki category pr hit krne par hume uski categories dikahyega..
let getCategory = async () => {
    divUl.innerHTML = '';
    let fectCategory = await fetch('https://dummyjson.com/products/categories');
    let fectRes = await fectCategory.json();
    let {slug} = fectRes
    // console.log(fectRes)


    // let li = `<ul>`;
    let li = '';
    fectRes.forEach(element => {
        li = li + `<li onclick ="getProduct('${element['slug']}')"><a href="#" style= "text-decoration : none">${element['slug']}</a> </li>`
        // console.log(element.name)
    });

    divUl.innerHTML += li
    // li = li + `</ul>`
}
getCategory()


// ab isme hum us product pr click rkne pr jayneg jaha hume uski all categories dekhne ko milegi...

let productOuter = document.querySelector('#productOuter')

let getProduct = async (catname = '') => {
    productOuter.innerHTML = ''
    let apiUrl;
    if (catname === '') {
        apiUrl = (`https://dummyjson.com/products`)
    }
    else {
        apiUrl = (`https://dummyjson.com/products/category/${catname}`)

    }

   
    let fecthData = await fetch(apiUrl);
    let res = await fecthData.json()

    // console.log(apiUrl)
    // console.log(res)
    let {products} = res
    
    let divInnerData = '';

        products.forEach((items, index) => {
        console.log(items)
        divInnerData += `  <div class="productInner">
                                <img src="${items.images[0]}" width ='100' height = "240px" alt="">
                                <div class="product_body">
                                    <h4>${items.title} | Rs ${items.price}</h4>
                                    <h5>Brand -- ${items.brand}</h5>
                                </div>
                            </div>  `
    })

    productOuter.innerHTML = divInnerData

}
getProduct()

// ab is getProduct() ko onclick function mein add karenge joki dynamically <li>${element.name}</li> generate ho rhi hai...





