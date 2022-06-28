var stripe = Stripe('pk_live_51JMkixJlaDijqZBddeXWU27898Hsc8MUh96kkIMhlgqbS8eZ5sMxEb9rbD6xo3gylm60V4heVcWnH27UmI1buPKd00GKt7UBUT');
localStorage.setItem("total", 0)
localStorage.setItem("giftcert", 0)

var items = 0;
var byoOptions = [{
    id:"Base",
    checked: true,
    name: "Chest Base",
    ship: 1.0,
    price: 69.99,
    image: "https://firebasestorage.googleapis.com/v0/b/redpatchoutdoors-test.appspot.com/o/RPO%20Product%20Photo%209-19-21%2FBase%201.JPG?alt=media&token=3a8d46e9-f596-4aab-8bda-62ddd2854515",
    description: "The Chest Rig Base features a full face panel of molle webbing ready to attach a whole selection of different pouches. Along the bottom edge is a 12-inch-wide  and 2-inch-deep Velcro attachment cavity(currently only usable with the Low Hanger Pouch, but many more options to come).   The back panel is completely detachable and features four self-locking  heavy-duty buckles."
},{
    id:"Backpack",
    checked: false,
    name: "Hydration Pack",
    price: 64.99,
    ship: 1.0,
    image: "https://firebasestorage.googleapis.com/v0/b/redpatchoutdoors-test.appspot.com/o/RPO%20Product%20Photo%209-19-21%2FHydration%20Pouch%201.JPG?alt=media&token=b032209a-ef84-4792-8865-3da687c4c9d1",
    description: "The Hydration Pouch is built to be used with the Chest Rig Base and replaces the back panel making a system that extends your usable space front and back.  This large pouch/back-panel can hold up to a 3 Liter water bladder or a large assortment of gear.  The face feature more molle that can be used to attach a large assortment of pouches."
},{
    name: "LowHanger Pouch",
    id:"Pouch",
    checked: false,
    price: 24.99,
    ship: 0.5,
    image: "https://firebasestorage.googleapis.com/v0/b/redpatchoutdoors-test.appspot.com/o/RPO%20Product%20Photo%209-19-21%2FLowHanger%201.JPG?alt=media&token=1006cee2-2dab-430a-8498-afe6617f71f6",
    description: "The Low Hanger Pouch is made to fit into the Velcro cavity on the bottom front edge of the Chest rig.  This pouch zips open across the front and has plenty of room for carrying all the little things you need in the outdoors.  Inside there are two elastic attachment points.  One made to hold knives, wind checker, pens, etc.  the other is meant to hold up to 10 spare .223 - .308 caliber rounds. This pouch is comfortable and is built with a double layered front panel.  You can crawl through the toughest country you can find and not rip through it"
},{
    id:"RangeFinder",
    checked: false,
    name: "RangeFinder Pouch",
    price: 27.50,
    ship:  0.25,
    image: "https://firebasestorage.googleapis.com/v0/b/redpatchoutdoors-test.appspot.com/o/RPO%20Product%20Photo%209-19-21%2FRangefinder%201.JPG?alt=media&token=f54483a1-e61a-463b-b5df-91bb8c49dfd1",
    description: "If you’re an archery hunter then you know the rangefinder is one of the most important pieces of gear in your kit.  This pouch can keep your rangefinder safe and at the ready.  The lid closes and holds tight with a strong magnet for silent opening and closing.  Inside the pouch has a tie off point so to tether your rangefinder directly to your pouch."
},{
    id:"ForwardOpeningBinoculars",
    checked: false,
    name: "Front Opening Bino Pouch",
    price: 44.99,
    ship:  0.5,
    image: "https://firebasestorage.googleapis.com/v0/b/redpatchoutdoors-test.appspot.com/o/RPO%20Product%20Photo%209-19-21%2FForward%20open%20Big%20Bino%201.JPG?alt=media&token=265e7287-81e5-434c-b005-33253f2bce34",
    description: "The forward opening bino pouch has all the same feature as the standard but with the added benefit of opening to the front.  The top fixes tightly closed with the same magnets as other pouches, but it also has magnetic fixtures to keep it open when you are pulling your binos out frequently."
},{
    id:"SmallBinoculars",
    checked: false,
    name: "Small Bino Pouch",
    price: 32.50,
    ship:  0.25,
    image: "https://firebasestorage.googleapis.com/v0/b/redpatchoutdoors-test.appspot.com/o/RPO%20Product%20Photo%209-19-21%2FSmall%20Bino%20Pouch%201.JPG?alt=media&token=e1b4ec55-0783-4774-9054-30b7b70fcb36",
    description: "Made specifically for small binoculars (8x25), this pouch is perfect for birdwatchers, hunters, and anyone who need their binos close and at the ready.  The lid closes with a strong magnet and there is an internal place to attach a tether."
},{
    id:"VerticalBearSpray",
    checked: false,
    name: "Vertical Bear Spray",
    price: 24.99,
    ship:  0.25,
    image: "https://firebasestorage.googleapis.com/v0/b/redpatchoutdoors-test.appspot.com/o/RPO%20Product%20Photo%209-19-21%2FBearspray%202.JPG?alt=media&token=3f68aca9-ec69-43b3-81f6-6a3a1b958549",
    description: "The Bear Spray Pouch comes in two orientation options. Vertical or horizontal.  The securing straps will hold the horizontal pouch secure so you can left or right hand draw.  The pouches will hold different sizes of Bear Spray Canisters and secure snuggly at the top.  The shock chord used to keep your bear spray secure has enough give that it can be pulled into deployment without loosening the keeper but will not allow the bear spray to fall out even when you’re running, climbing, or crawling in the dirt."
},{
    id:"HorizontalBearSpray",
    checked: false,
    name: "Horizontal Bear Spray",
    price: 24.99,
    ship:  0.25,
    image: "https://firebasestorage.googleapis.com/v0/b/redpatchoutdoors-test.appspot.com/o/RPO%20Product%20Photo%209-19-21%2FBearspray%202.JPG?alt=media&token=3f68aca9-ec69-43b3-81f6-6a3a1b958549",
    description: "The Bear Spray Pouch comes in two orientation options. Vertical or horizontal.  The securing straps will hold the horizontal pouch secure so you can left or right hand draw.  The pouches will hold different sizes of Bear Spray Canisters and secure snuggly at the top.  The shock chord used to keep your bear spray secure has enough give that it can be pulled into deployment without loosening the keeper but will not allow the bear spray to fall out even when you’re running, climbing, or crawling in the dirt."
},{
    id:"SmallZipper",
    checked: false,
    name: "S - Zipper Pouch",
    price: 27.49,
    ship:  0.25,
    image: "https://firebasestorage.googleapis.com/v0/b/redpatchoutdoors-test.appspot.com/o/RPO%20Product%20Photo%209-19-21%2FSmall%20Zipper%20Pouch%201.JPG?alt=media&token=7f254322-b640-4e37-8b8e-65f2bd120b6d",
    description: "Just the right size for all the little things you need outside."
},{
    id:"LargeZipper",
    checked: false,
    name: "L - Zipper Pouch",
    price: 39.99,
    ship:  0.5,
    image: "https://firebasestorage.googleapis.com/v0/b/redpatchoutdoors-test.appspot.com/o/RPO%20Product%20Photo%209-19-21%2FBig%20Zipper%20Pouch%201.JPG?alt=media&token=b5fec2fc-4832-4839-a29d-ff4ecc272709",
    description: "Featuring one large internal pocket and three layers of molle on each side."
}
];
var selectedNames = [];
var byoPrice = 0;

{/* <button class="snipcart-add-item" data-item-id="the base" data-item-price="65.00" data-item-url="/" data-item-description="The start of all red patch setups." data-item-image="./images/base.jpg" data-item-name="the Base"> Add to cart</button> */}
var cartNum =  document.getElementById("cartnum")


function colorElement(id){
    return '<div onmouseover="popup(\'tan'+id+'\')" onmouseout="popdown(\'tan'+id+'\')" class="popup" id="description'+id+'"><input id="'+id+'tan" type="radio" name="'+id+'color" value="tan" /><label class="drinkcard-cc tan" for="'+id+'tan"></label><div class="popuptext" id="tan'+id+'Popup"><p>Tan</p></div></div><div onmouseover="popup(\'orange'+id+'\')" onmouseout="popdown(\'orange'+id+'\')" class="popup" id="description'+id+'"><input id="'+id+'orange" type="radio" name="'+id+'color" value="orange" /><label class="drinkcard-cc orange"for="'+id+'orange"></label><div class="popuptext" id="orange'+id+'Popup"><p>Orange</p></div></div><div onmouseover="popup(\'green'+id+'\')" onmouseout="popdown(\'green'+id+'\')" class="popup" id="description'+id+'"><input id="'+id+'green" type="radio" name="'+id+'color" value="green" /><label class="drinkcard-cc green" for="'+id+'green"></label><div class="popuptext" id="green'+id+'Popup"><p>Green</p></div></div><div onmouseover="popup(\'camo'+id+'\')" onmouseout="popdown(\'camo'+id+'\')" class="popup" id="description'+id+'"><input id="'+id+'camo" type="radio" name="'+id+'color" value="camo" /><label class="drinkcard-cc camo"for="'+id+'camo"></label><div class="popuptext" id="camo'+id+'Popup"><p>Camo</p></div></div>'
}
function hatColorElement(id){
    return '<div onmouseover="popup(\'black'+id+'\')" onmouseout="popdown(\'black'+id+'\')" class="popup" id="description'+id+'"><input id="'+id+'black" type="radio" name="'+id+'color" value="black" /><label class="drinkcard-cc black" for="'+id+'black"></label><div class="popuptext" id="black'+id+'Popup"><p>black</p></div></div><div onmouseover="popup(\'camo'+id+'\')" onmouseout="popdown(\'camo'+id+'\')" class="popup" id="description'+id+'"><input id="'+id+'camo" type="radio" name="'+id+'color" value="camo" /><label class="drinkcard-cc hcamo"for="'+id+'camo"></label><div class="popuptext" id="camo'+id+'Popup"><p>camo</p></div></div><div onmouseover="popup(\'charcoal'+id+'\')" onmouseout="popdown(\'charcoal'+id+'\')" class="popup" id="description'+id+'"><input id="'+id+'charcoal" type="radio" name="'+id+'color" value="charcoal" /><label class="drinkcard-cc charcoal" for="'+id+'charcoal"></label><div class="popuptext" id="charcoal'+id+'Popup"><p>charcoal</p></div></div><div onmouseover="popup(\'green'+id+'\')" onmouseout="popdown(\'green'+id+'\')" class="popup" id="description'+id+'"><input id="'+id+'green" type="radio" name="'+id+'color" value="green" /><label class="drinkcard-cc green"for="'+id+'green"></label><div class="popuptext" id="green'+id+'Popup"><p>green</p></div></div>'
}
function orientationElement(id){
    return '<br><br><div class="cc-selector-2" style="text-align:left; margin-left: 30vw"><input id="'+id+'vertical" type="radio" name="'+id+'orientation" value="vertical" /><label for="'+id+'vertical">Vertical</label><br><br><input id="'+id+'horizontal" type="radio" name="'+id+'orientation" value="horizontal" /><label for="'+id+'horizontal">Horizontal</label><br></div><br>'
}
function sizeElementDisabler(id){
    try {
        firebase
        .firestore()
        .collection('Apparell')
        .onSnapshot((snapshot) => {
        var luck = false;
          snapshot.forEach((doc) => {
            const data = doc.data();
            if(id === data.id){
                luck = true;
                //console.log(!(data.inventory["x-small"]>0))
                if(!(data.inventory["xx-large"]>0)){
                    document.getElementById(id+'sizexxlarge').disabled = true;
                }

                if(!(data.inventory["x-large"]>0)){
                    document.getElementById(id+'sizexlarge').disabled = true;
                }

                if(!(data.inventory["large"]>0)){
                    document.getElementById(id+'sizelarge').disabled = true;
                }

                if(!(data.inventory["medium"]>0)){
                    document.getElementById(id+'sizemedium').disabled = true;
                }

                if(!(data.inventory["small"]>0)){
                    document.getElementById(id+'sizesmall').disabled = true;
                }

                if(!(data.inventory["x-small"]>0)){
                    document.getElementById(id+'sizexsmall').disabled = true;
                }
                // if(data.inventory["x-large"]>0){
                //     returner = returner + '<input id="'+id+'sizexlarge" type="radio" name="'+id+'size" value="xxlarge" /><label for="'+id+'sizexlarge">X-Large</label><br></br>'
                // }else{
                //     returner = returner + '<input id="'+id+'sizexlarge" type="radio" name="'+id+'size" value="xxlarge" disabled/><label for="'+id+'sizexlarge">X-Large</label><br></br>'
                // }

                // if(data.inventory["large"]>0){
                //     returner = returner + '<input id="'+id+'sizelarge" type="radio" name="'+id+'size" value="large" /><label for="'+id+'sizelarge">Large</label><br></br>'
                // }else{
                //     returner = returner + '<input id="'+id+'sizelarge" type="radio" name="'+id+'size" value="large" disabled/><label for="'+id+'sizelarge">Large</label><br></br>'
                // }

                // if(data.inventory["medium"]>0){
                //     returner = returner + '<input id="'+id+'sizemedium" type="radio" name="'+id+'size" value="medium" /><label for="'+id+'sizemedium">Medium</label><br></br>'
                // }else{
                //     returner = returner + '<input id="'+id+'sizemedium" type="radio" name="'+id+'size" value="medium" disabled/><label for="'+id+'sizemedium">Medium</label><br></br>'
                // }

                // if(data.inventory["small"]>0){
                //     returner = returner + '<input id="'+id+'sizesmall" type="radio" name="'+id+'size" value="small" /><label for="'+id+'sizesmall">Small</label><br></br>'
                // }else{
                //     returner = returner + '<input id="'+id+'sizesmall" type="radio" name="'+id+'size" value="small" disabled/><label for="'+id+'sizesmall">Small</label><br></br>'
                // }

                // if(data.inventory["x-small"]>0){
                //     returner = returner + '<input id="'+id+'sizexsmall" type="radio" name="'+id+'size" value="xsmall" /><label for="'+id+'sizexsmall">X-Small</label><br></br>'
                // }else{
                //     returner = returner + '<input id="'+id+'sizexsmall" type="radio" name="'+id+'size" value="xsmall" disabled/><label for="'+id+'sizexsmall">X-Small</label><br></br>'
                // }

            }

          })
        })
    } catch (error) {

    }

}

function sizeElement(id){
    
    return '<div class="cc-selector-2" style="text-align:left; margin-left: 30vw"><input id="'+id+'sizexxlarge" type="radio" name="'+id+'size" value="xxlarge" /><label for="'+id+'sizexxlarge">XX-Large</label><br><input id="'+id+'sizexlarge" type="radio" name="'+id+'size" value="xlarge" /><label for="'+id+'sizexlarge">X-Large</label><br><input id="'+id+'sizelarge" type="radio" name="'+id+'size" value="large" /><label for="'+id+'sizelarge">Large</label><br><input id="'+id+'sizemedium" type="radio" name="'+id+'size" value="medium" /><label for="'+id+'sizemedium">Medium</label><br><input id="'+id+'sizesmall" type="radio" name="'+id+'size" value="small" /><label for="'+id+'sizesmall">Small</label><br><input id="'+id+'sizexsmall" type="radio" name="'+id+'size" value="xsmall" /><label for="'+id+'sizexsmall">X-Small</label><br></div>'
    

}

function imageElement(image, thumbimage){
    var arrayLength = thumbimage.length;
    var images = "";
    for (var i = 0; i < arrayLength; i++) {
        images = images + '<article><a href="'+image[i]+'" class="image"><img src="'+thumbimage[i]+'" alt="" /></a><div class="caption"><p>get a closer clook</p></div></article>'
    }
    return images;
}


function MakeProduct(title, description, price, image, thumbimage, id, sizes, color, orientation, ship){
    //console.log(ship)
    if(sizes && color && orientation){
        var newproduct = '<section><div class="gallery style1 small lightbox onscroll-fade-in">'+imageElement(image, thumbimage)+'</div><br><h3>'+title+'</h3><p style="margin: 20px">'+description+'</p><h5>$'+price+'</h5>'+colorElement(id)+sizeElement(id)+orientationElement(id)+'<br><ul class="actions vertical"><li><button class="snipcart-add-item-temp" data-item-id="'+id+'" data-item-price="'+price+'" data-item-url="/" data-item-description="'+description+'" data-item-image="'+thumbimage[0]+'" data-item-size="'+id+'size" data-item-color="'+id+'color" data-item-orientation="'+id+'orientation" data-item-shipCoeff="'+ship+'" data-item-name="'+title+'">Add to cart</button></ul></section><hr>'
        document.getElementById("allproducts").innerHTML = document.getElementById("allproducts").innerHTML + newproduct;
    }
    else if(sizes && color){
        var newproduct = '<section><div class="gallery style1 small lightbox onscroll-fade-in">'+imageElement(image, thumbimage)+'</div><br><h3>'+title+'</h3><p style="margin: 20px">'+description+'</p><h5>$'+price+'</h5>'+colorElement(id)+sizeElement(id)+'<br><ul class="actions vertical"><li><button class="snipcart-add-item-temp" data-item-id="'+id+'" data-item-price="'+price+'" data-item-url="/" data-item-description="'+description+'" data-item-image="'+thumbimage[0]+'" data-item-size="'+id+'size" data-item-color="'+id+'color" data-item-shipCoeff="'+ship+'" data-item-name="'+title+'">Add to cart</button></ul></section><hr>'
        document.getElementById("allproducts").innerHTML = document.getElementById("allproducts").innerHTML + newproduct;
    }
    else if(sizes && orientation){
        var newproduct = '<section><div class="gallery style1 small lightbox onscroll-fade-in">'+imageElement(image, thumbimage)+'</div><br><h3>'+title+'</h3><p style="margin: 20px">'+description+'</p><h5>$'+price+'</h5>'+sizeElement(id)+orientationElement(id)+'<br><ul class="actions vertical"><li><button class="snipcart-add-item-temp" data-item-id="'+id+'" data-item-price="'+price+'" data-item-url="/" data-item-description="'+description+'" data-item-image="'+thumbimage[0]+'" data-item-size="'+id+'size" data-item-orientation="'+id+'orientation"  data-item-shipCoeff="'+ship+'"  data-item-name="'+title+'">Add to cart</button></ul></section><hr>'
        document.getElementById("allproducts").innerHTML = document.getElementById("allproducts").innerHTML + newproduct;
    }
    else if(sizes){
        var newproduct = '<section><div class="gallery style1 small lightbox onscroll-fade-in">'+imageElement(image, thumbimage)+'</div><br><h3>'+title+'</h3><p style="margin: 20px">'+description+'</p><h5>$'+price+'</h5>'+sizeElement(id)+'<br><ul class="actions vertical"><li><button class="snipcart-add-item-temp" data-item-id="'+id+'" data-item-price="'+price+'" data-item-url="/" data-item-description="'+description+'" data-item-image="'+thumbimage[0]+'"  data-item-shipCoeff="'+ship+'"  data-item-size="'+id+'size" data-item-name="'+title+'">Add to cart</button></ul></section><hr>'
        document.getElementById("allproducts").innerHTML = document.getElementById("allproducts").innerHTML + newproduct;
    }
    else if (color && orientation){
        var newproduct = '<section><div class="gallery style1 small lightbox onscroll-fade-in">'+imageElement(image, thumbimage)+'</div><br><h3>'+title+'</h3><p style="margin: 20px">'+description+'</p><h5>$'+price+'</h5>'+colorElement(id)+orientationElement(id)+'<ul class="actions vertical"><li><button class="snipcart-add-item-temp" data-item-id="'+id+'" data-item-price="'+price+'" data-item-url="/" data-item-description="'+description+'" data-item-image="'+thumbimage[0]+'" data-item-color="'+id+'color" data-item-orientation="'+id+'orientation"  data-item-shipCoeff="'+ship+'"  data-item-name="'+title+'">Add to cart</button></ul></section><hr>'
        document.getElementById("allproducts").innerHTML = document.getElementById("allproducts").innerHTML + newproduct;
    }
    else if (color){
        var newproduct = '<section><div class="gallery style1 small lightbox onscroll-fade-in">'+imageElement(image, thumbimage)+'</div><br><h3>'+title+'</h3><p style="margin: 20px">'+description+'</p><h5>$'+price+'</h5>'+colorElement(id)+'<ul class="actions vertical"><li><button class="snipcart-add-item-temp" data-item-id="'+id+'" data-item-price="'+price+'" data-item-url="/" data-item-description="'+description+'" data-item-image="'+thumbimage[0]+'"  data-item-shipCoeff="'+ship+'"  data-item-color="'+id+'color" data-item-name="'+title+'">Add to cart</button></ul></section><hr>'
        document.getElementById("allproducts").innerHTML = document.getElementById("allproducts").innerHTML + newproduct;
    }
    else if (orientation){
        var newproduct = '<section><div class="gallery style1 small lightbox onscroll-fade-in">'+imageElement(image, thumbimage)+'</div><br><h3>'+title+'</h3><p style="margin: 20px">'+description+'</p><h5>$'+price+'</h5>'+orientationElement(id)+'<ul class="actions vertical"><li><button class="snipcart-add-item-temp" data-item-id="'+id+'" data-item-price="'+price+'" data-item-url="/" data-item-description="'+description+'" data-item-image="'+thumbimage[0]+'"  data-item-shipCoeff="'+ship+'"  data-item-orientation="'+id+'orientation"  data-item-name="'+title+'">Add to cart</button></ul></section><hr>'
        document.getElementById("allproducts").innerHTML = document.getElementById("allproducts").innerHTML + newproduct;
    }

    else{    
        var newproduct = '<section><div class="gallery style1 small lightbox onscroll-fade-in">'+imageElement(image, thumbimage)+'</div><br><h3>'+title+'</h3><p style="margin: 20px">'+description+'</p><h5>$'+price+'</h5><ul class="actions vertical"><li><button class="snipcart-add-item-temp" data-item-id="'+id+'" data-item-price="'+price+'" data-item-url="/" data-item-description="'+description+'" data-item-image="'+thumbimage[0]+'"  data-item-shipCoeff="'+ship+'"  data-item-name="'+title+'">Add to cart</button></ul></section><hr>'
        document.getElementById("allproducts").innerHTML = document.getElementById("allproducts").innerHTML + newproduct;
    }

}
function MakeApparellProduct(title, description, price, image, thumbimage, id, sizes, color, orientation, ship, hatColor){
    if(sizes && color && orientation){
        var newproduct = '<section><div class="gallery style1 small lightbox onscroll-fade-in">'+imageElement(image, thumbimage)+'</div><br><h3>'+title+'</h3><p style="margin: 20px">'+description+'</p><h5>$'+price+'</h5>'+colorElement(id)+sizeElement(id)+orientationElement(id)+'<br><ul class="actions vertical"><li><button class="snipcart-add-item-temp" data-item-id="'+id+'" data-item-price="'+price+'" data-item-url="/" data-item-description="'+description+'" data-item-image="'+thumbimage[0]+'" data-item-size="'+id+'size" data-item-color="'+id+'color" data-item-orientation="'+id+'orientation"   data-item-shipCoeff="'+ship+'"   data-item-name="'+title+'">Add to cart</button></ul></section><hr>'
        document.getElementById("Apparell").innerHTML = document.getElementById("Apparell").innerHTML + newproduct;
        sizeElementDisabler(id)
    }
    else if(sizes && color){
        var newproduct = '<section><div class="gallery style1 small lightbox onscroll-fade-in">'+imageElement(image, thumbimage)+'</div><br><h3>'+title+'</h3><p style="margin: 20px">'+description+'</p><h5>$'+price+'</h5>'+colorElement(id)+sizeElement(id)+'<br><ul class="actions vertical"><li><button class="snipcart-add-item-temp" data-item-id="'+id+'" data-item-price="'+price+'" data-item-url="/" data-item-description="'+description+'" data-item-image="'+thumbimage[0]+'" data-item-size="'+id+'size" data-item-color="'+id+'color"   data-item-shipCoeff="'+ship+'"   data-item-name="'+title+'">Add to cart</button></ul></section><hr>'
        document.getElementById("Apparell").innerHTML = document.getElementById("Apparell").innerHTML + newproduct;
        sizeElementDisabler(id)
    }
    else if(sizes && orientation){
        var newproduct = '<section><div class="gallery style1 small lightbox onscroll-fade-in">'+imageElement(image, thumbimage)+'</div><br><h3>'+title+'</h3><p style="margin: 20px">'+description+'</p><h5>$'+price+'</h5>'+sizeElement(id)+orientationElement(id)+'<br><ul class="actions vertical"><li><button class="snipcart-add-item-temp" data-item-id="'+id+'" data-item-price="'+price+'" data-item-url="/" data-item-description="'+description+'" data-item-image="'+thumbimage[0]+'" data-item-size="'+id+'size" data-item-orientation="'+id+'orientation"   data-item-shipCoeff="'+ship+'"    data-item-name="'+title+'">Add to cart</button></ul></section><hr>'
        document.getElementById("Apparell").innerHTML = document.getElementById("Apparell").innerHTML + newproduct;
        sizeElementDisabler(id)
    }
    else if(sizes){
        var newproduct = '<section><div class="gallery style1 small lightbox onscroll-fade-in">'+imageElement(image, thumbimage)+'</div><br><h3>'+title+'</h3><p style="margin: 20px">'+description+'</p><h5>$'+price+'</h5>'+sizeElement(id)+'<br><ul class="actions vertical"><li><button class="snipcart-add-item-temp" data-item-id="'+id+'" data-item-price="'+price+'" data-item-url="/" data-item-description="'+description+'" data-item-image="'+thumbimage[0]+'" data-item-size="'+id+'size"   data-item-shipCoeff="'+ship+'"   data-item-name="'+title+'">Add to cart</button></ul></section><hr>'
        document.getElementById("Apparell").innerHTML = document.getElementById("Apparell").innerHTML + newproduct;
        sizeElementDisabler(id)
    }
    else if (color && orientation){
        var newproduct = '<section><div class="gallery style1 small lightbox onscroll-fade-in">'+imageElement(image, thumbimage)+'</div><br><h3>'+title+'</h3><p style="margin: 20px">'+description+'</p><h5>$'+price+'</h5>'+colorElement(id)+orientationElement(id)+'<ul class="actions vertical"><li><button class="snipcart-add-item-temp" data-item-id="'+id+'" data-item-price="'+price+'" data-item-url="/" data-item-description="'+description+'" data-item-image="'+thumbimage[0]+'" data-item-color="'+id+'color" data-item-orientation="'+id+'orientation"   data-item-shipCoeff="'+ship+'"   data-item-name="'+title+'">Add to cart</button></ul></section><hr>'
        document.getElementById("Apparell").innerHTML = document.getElementById("Apparell").innerHTML + newproduct;
    }
    else if (color){
        var newproduct = '<section><div class="gallery style1 small lightbox onscroll-fade-in">'+imageElement(image, thumbimage)+'</div><br><h3>'+title+'</h3><p style="margin: 20px">'+description+'</p><h5>$'+price+'</h5>'+colorElement(id)+'<ul class="actions vertical"><li><button class="snipcart-add-item-temp" data-item-id="'+id+'"   data-item-shipCoeff="'+ship+'"   data-item-price="'+price+'" data-item-url="/" data-item-description="'+description+'" data-item-image="'+thumbimage[0]+'" data-item-color="'+id+'color" data-item-name="'+title+'">Add to cart</button></ul></section><hr>'
        document.getElementById("Apparell").innerHTML = document.getElementById("Apparell").innerHTML + newproduct;
    }
    else if (hatColor){
        var newproduct = '<section><div class="gallery style1 small lightbox onscroll-fade-in">'+imageElement(image, thumbimage)+'</div><br><h3>'+title+'</h3><p style="margin: 20px">'+description+'</p><h5>$'+price+'</h5>'+hatColorElement(id)+'<ul class="actions vertical"><li><button class="snipcart-add-item-temp" data-item-id="'+id+'"   data-item-shipCoeff="'+ship+'"   data-item-price="'+price+'" data-item-url="/" data-item-description="'+description+'" data-item-image="'+thumbimage[0]+'" data-item-color="'+id+'color" data-item-name="'+title+'">Add to cart</button></ul></section><hr>'
        document.getElementById("Apparell").innerHTML = document.getElementById("Apparell").innerHTML + newproduct;
    }  
    else if (orientation){
        var newproduct = '<section><div class="gallery style1 small lightbox onscroll-fade-in">'+imageElement(image, thumbimage)+'</div><br><h3>'+title+'</h3><p style="margin: 20px">'+description+'</p><h5>$'+price+'</h5>'+orientationElement(id)+'<ul class="actions vertical"><li><button class="snipcart-add-item-temp" data-item-id="'+id+'" data-item-price="'+price+'" data-item-url="/" data-item-description="'+description+'" data-item-image="'+thumbimage[0]+'" data-item-orientation="'+id+'orientation"   data-item-shipCoeff="'+ship+'"    data-item-name="'+title+'">Add to cart</button></ul></section><hr>'
        document.getElementById("Apparell").innerHTML = document.getElementById("Apparell").innerHTML + newproduct;
    }
    else{    
        var newproduct = '<section><div class="gallery style1 small lightbox onscroll-fade-in">'+imageElement(image, thumbimage)+'</div><br><h3>'+title+'</h3><p style="margin: 20px">'+description+'</p><h5>$'+price+'</h5><ul class="actions vertical"><li><button class="snipcart-add-item-temp" data-item-id="'+id+'" data-item-price="'+price+'" data-item-url="/" data-item-description="'+description+'"   data-item-shipCoeff="'+ship+'"   data-item-image="'+thumbimage[0]+'" data-item-name="'+title+'">Add to cart</button></ul></section><hr>'
        document.getElementById("Apparell").innerHTML = document.getElementById("Apparell").innerHTML + newproduct;
    }

}
function setupAddToCart(event){
    //console.log(event.target.getAttribute("data-item-color") +","+event.target.getAttribute("data-item-size"))
    if(!(event.target.getAttribute("data-item-color") === null)&&!(event.target.getAttribute("data-item-size") === null)&&!(event.target.getAttribute("data-item-orientation") === null)){
        if(!($('input[name="'+event.target.getAttribute("data-item-color")+'"]:checked').val() === undefined)&&!($('input[name="'+event.target.getAttribute("data-item-size")+'"]:checked').val() === undefined)&&!($('input[name="'+event.target.getAttribute("data-item-orientation")+'"]:checked').val() === undefined)){
            //console.log(event.target.getAttribute("data-item-id"))
            var currShip = localStorage.getItem("shipCoeff");
            event.target.getAttribute("data-item-shipCoeff")
            localStorage.setItem("shipCoeff", ( event.target.getAttribute("data-item-shipCoeff") + currShip))
            var item = "{ ";
            item += '"id": "' + event.target.getAttribute("data-item-id")
            item += '", "price": "' + event.target.getAttribute("data-item-price")
            item += '", "description": "' + event.target.getAttribute("data-item-description")
            item += '", "ship": "' + event.target.getAttribute("data-item-shipCoeff")
            item += '", "image": "'+ event.target.getAttribute("data-item-image")
            try {
                item += '", "color": "'+ $('input[name="'+event.target.getAttribute("data-item-color")+'"]:checked').val()
            } catch (error) { }
            try {
                item += '", "size": "'+ $('input[name="'+event.target.getAttribute("data-item-size")+'"]:checked').val()
            } catch (error) { }
            try {
                item += '", "orientation": "'+ $('input[name="'+event.target.getAttribute("data-item-orientation")+'"]:checked').val()
            } catch (error) { }
            item += '", "name": "' + event.target.getAttribute("data-item-name") + '" },'
            var order = localStorage.getItem("log")+ item
            localStorage.setItem("log", order)
            //console.log(localStorage.getItem("log").slice(0, -1)+"]}")
            var cartnum = JSON.parse(localStorage.getItem("log").slice(0, -1)+"]}")["orders"].length
            document.getElementById("cartBtn").innerHTML = '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" alt="" title="" class="snipcart-cart-header__icon snipcart__icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M51.714 20.47L55 60H9l3.286-39.53h9.857v-6.588C22.143 8.424 26.556 4 32 4c5.444 0 9.857 4.424 9.857 9.882v6.589h9.857zM25.43 13.883v16.47h-3.286v-6.587h-6.834l-2.737 32.94h38.856l-2.737-32.94h-6.834v6.588h-3.286v-16.47c0-3.634-2.947-6.589-6.571-6.589-3.624 0-6.571 2.955-6.571 6.588zm3.285 9.883V20.47h6.572v3.294h-6.572z" fill="#e43d3d"></path></svg> '+ cartnum
        }else{
            alert("Please select a color, size, and/or orientation.")
        }

    }else if(!(event.target.getAttribute("data-item-color") === null)&&!(event.target.getAttribute("data-item-size") === null)){
        if(!($('input[name="'+event.target.getAttribute("data-item-color")+'"]:checked').val() === undefined)&&!($('input[name="'+event.target.getAttribute("data-item-size")+'"]:checked').val() === undefined)){
            //console.log(event.target.getAttribute("data-item-id"))
            var currShip = localStorage.getItem("shipCoeff");
            event.target.getAttribute("data-item-shipCoeff")
            localStorage.setItem("shipCoeff", ( event.target.getAttribute("data-item-shipCoeff") + currShip))
            var item = "{ ";
            item += '"id": "' + event.target.getAttribute("data-item-id")
            item += '", "price": "' + event.target.getAttribute("data-item-price")
            item += '", "description": "' + event.target.getAttribute("data-item-description")
            item += '", "ship": "' + event.target.getAttribute("data-item-shipCoeff")
            item += '", "image": "'+ event.target.getAttribute("data-item-image")
            try {
                item += '", "color": "'+ $('input[name="'+event.target.getAttribute("data-item-color")+'"]:checked').val()
            } catch (error) { }
            try {
                item += '", "size": "'+ $('input[name="'+event.target.getAttribute("data-item-size")+'"]:checked').val()
            } catch (error) { }
            item += '", "name": "' + event.target.getAttribute("data-item-name") + '" },'
            var order = localStorage.getItem("log")+ item
            localStorage.setItem("log", order)
            //console.log(localStorage.getItem("log").slice(0, -1)+"]}")
            var cartnum = JSON.parse(localStorage.getItem("log").slice(0, -1)+"]}")["orders"].length
            document.getElementById("cartBtn").innerHTML = '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" alt="" title="" class="snipcart-cart-header__icon snipcart__icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M51.714 20.47L55 60H9l3.286-39.53h9.857v-6.588C22.143 8.424 26.556 4 32 4c5.444 0 9.857 4.424 9.857 9.882v6.589h9.857zM25.43 13.883v16.47h-3.286v-6.587h-6.834l-2.737 32.94h38.856l-2.737-32.94h-6.834v6.588h-3.286v-16.47c0-3.634-2.947-6.589-6.571-6.589-3.624 0-6.571 2.955-6.571 6.588zm3.285 9.883V20.47h6.572v3.294h-6.572z" fill="#e43d3d"></path></svg> '+ cartnum
        }else{
            alert("Please select a color and/or size.")
        }

    }else if(!(event.target.getAttribute("data-item-size") === null)&&!(event.target.getAttribute("data-item-orientation") === null)){
        if(!($('input[name="'+event.target.getAttribute("data-item-size")+'"]:checked').val() === undefined)&&!($('input[name="'+event.target.getAttribute("data-item-orientation")+'"]:checked').val() === undefined)){
            //console.log(event.target.getAttribute("data-item-id"))
            var currShip = localStorage.getItem("shipCoeff");
            event.target.getAttribute("data-item-shipCoeff")
            localStorage.setItem("shipCoeff", ( event.target.getAttribute("data-item-shipCoeff") + currShip))
            var item = "{ ";
            item += '"id": "' + event.target.getAttribute("data-item-id")
            item += '", "price": "' + event.target.getAttribute("data-item-price")
            item += '", "description": "' + event.target.getAttribute("data-item-description")
            item += '", "ship": "' + event.target.getAttribute("data-item-shipCoeff")
            item += '", "image": "'+ event.target.getAttribute("data-item-image")

            try {
                item += '", "size": "'+ $('input[name="'+event.target.getAttribute("data-item-size")+'"]:checked').val()
            } catch (error) { }
            try {
                item += '", "orientation": "'+ $('input[name="'+event.target.getAttribute("data-item-orientation")+'"]:checked').val()
            } catch (error) { }
            item += '", "name": "' + event.target.getAttribute("data-item-name") + '" },'
            var order = localStorage.getItem("log")+ item
            localStorage.setItem("log", order)
            //console.log(localStorage.getItem("log").slice(0, -1)+"]}")
            var cartnum = JSON.parse(localStorage.getItem("log").slice(0, -1)+"]}")["orders"].length
            document.getElementById("cartBtn").innerHTML = '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" alt="" title="" class="snipcart-cart-header__icon snipcart__icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M51.714 20.47L55 60H9l3.286-39.53h9.857v-6.588C22.143 8.424 26.556 4 32 4c5.444 0 9.857 4.424 9.857 9.882v6.589h9.857zM25.43 13.883v16.47h-3.286v-6.587h-6.834l-2.737 32.94h38.856l-2.737-32.94h-6.834v6.588h-3.286v-16.47c0-3.634-2.947-6.589-6.571-6.589-3.624 0-6.571 2.955-6.571 6.588zm3.285 9.883V20.47h6.572v3.294h-6.572z" fill="#e43d3d"></path></svg> '+ cartnum
        }else{
            alert("Please select a size and/or orientation.")
        }

    }else if(!(event.target.getAttribute("data-item-color") === null)&&!(event.target.getAttribute("data-item-orientation") === null)){
        if(!($('input[name="'+event.target.getAttribute("data-item-color")+'"]:checked').val() === undefined)&&!($('input[name="'+event.target.getAttribute("data-item-orientation")+'"]:checked').val() === undefined)){
            //console.log(event.target.getAttribute("data-item-id"))
            var currShip = localStorage.getItem("shipCoeff");
            event.target.getAttribute("data-item-shipCoeff")
            localStorage.setItem("shipCoeff", ( event.target.getAttribute("data-item-shipCoeff") + currShip))
            var item = "{ ";
            item += '"id": "' + event.target.getAttribute("data-item-id")
            item += '", "price": "' + event.target.getAttribute("data-item-price")
            item += '", "description": "' + event.target.getAttribute("data-item-description")
            item += '", "ship": "' + event.target.getAttribute("data-item-shipCoeff")
            item += '", "image": "'+ event.target.getAttribute("data-item-image")
            try {
                item += '", "color": "'+ $('input[name="'+event.target.getAttribute("data-item-color")+'"]:checked').val()
            } catch (error) { }

            try {
                item += '", "orientation": "'+ $('input[name="'+event.target.getAttribute("data-item-orientation")+'"]:checked').val()
            } catch (error) { }
            item += '", "name": "' + event.target.getAttribute("data-item-name") + '" },'
            var order = localStorage.getItem("log")+ item
            localStorage.setItem("log", order)
            //console.log(localStorage.getItem("log").slice(0, -1)+"]}")
            var cartnum = JSON.parse(localStorage.getItem("log").slice(0, -1)+"]}")["orders"].length
            document.getElementById("cartBtn").innerHTML = '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" alt="" title="" class="snipcart-cart-header__icon snipcart__icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M51.714 20.47L55 60H9l3.286-39.53h9.857v-6.588C22.143 8.424 26.556 4 32 4c5.444 0 9.857 4.424 9.857 9.882v6.589h9.857zM25.43 13.883v16.47h-3.286v-6.587h-6.834l-2.737 32.94h38.856l-2.737-32.94h-6.834v6.588h-3.286v-16.47c0-3.634-2.947-6.589-6.571-6.589-3.624 0-6.571 2.955-6.571 6.588zm3.285 9.883V20.47h6.572v3.294h-6.572z" fill="#e43d3d"></path></svg> '+ cartnum
        }else{
            alert("Please select a color and/or orientation.")
        }

    }
    else if(!(event.target.getAttribute("data-item-color") === null)){
        if(!($('input[name="'+event.target.getAttribute("data-item-color")+'"]:checked').val() === undefined)){
            //console.log(event.target.getAttribute("data-item-id"))
            var currShip = localStorage.getItem("shipCoeff");
            event.target.getAttribute("data-item-shipCoeff")
            localStorage.setItem("shipCoeff", ( event.target.getAttribute("data-item-shipCoeff") + currShip))
            var item = "{ ";
            item += '"id": "' + event.target.getAttribute("data-item-id")
            item += '", "price": "' + event.target.getAttribute("data-item-price")
            item += '", "description": "' + event.target.getAttribute("data-item-description")
            item += '", "ship": "' + event.target.getAttribute("data-item-shipCoeff")
            item += '", "image": "'+ event.target.getAttribute("data-item-image")
            try {
                item += '", "color": "'+ $('input[name="'+event.target.getAttribute("data-item-color")+'"]:checked').val()
            } catch (error) { }
            item += '", "name": "' + event.target.getAttribute("data-item-name") + '" },'
            var order = localStorage.getItem("log")+ item
            localStorage.setItem("log", order)
            //console.log(localStorage.getItem("log").slice(0, -1)+"]}")
            var cartnum = JSON.parse(localStorage.getItem("log").slice(0, -1)+"]}")["orders"].length
            document.getElementById("cartBtn").innerHTML = '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" alt="" title="" class="snipcart-cart-header__icon snipcart__icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M51.714 20.47L55 60H9l3.286-39.53h9.857v-6.588C22.143 8.424 26.556 4 32 4c5.444 0 9.857 4.424 9.857 9.882v6.589h9.857zM25.43 13.883v16.47h-3.286v-6.587h-6.834l-2.737 32.94h38.856l-2.737-32.94h-6.834v6.588h-3.286v-16.47c0-3.634-2.947-6.589-6.571-6.589-3.624 0-6.571 2.955-6.571 6.588zm3.285 9.883V20.47h6.572v3.294h-6.572z" fill="#e43d3d"></path></svg> '+ cartnum
        }else{
            alert("Please select a color")
        }

    }else if(!(event.target.getAttribute("data-item-size") === null)&&!(event.target.getAttribute("data-item-inventory") === null)){
        if(!($('input[name="'+event.target.getAttribute("data-item-size")+'"]:checked').val() === undefined)){
            //console.log(event.target.getAttribute("data-item-id"))
            var currShip = localStorage.getItem("shipCoeff");
            event.target.getAttribute("data-item-shipCoeff")
            localStorage.setItem("shipCoeff", ( event.target.getAttribute("data-item-shipCoeff") + currShip))
            var item = "{ ";
            item += '"id": "' + event.target.getAttribute("data-item-id")
            item += '", "price": "' + event.target.getAttribute("data-item-price")
            item += '", "description": "' + event.target.getAttribute("data-item-description")
            item += '", "ship": "' + event.target.getAttribute("data-item-shipCoeff")
            item += '", "image": "'+ event.target.getAttribute("data-item-image")
            var ok=true
            try {
                item += '", "size": "'+ $('input[name="'+event.target.getAttribute("data-item-size")+'"]:checked').val()
            } catch (error) { }
            try{
                firebase
                .firestore()
                .collection('Apparell')
                .onSnapshot((snapshot) => {
                  snapshot.forEach((doc) => {
                    const data = doc.data();
                    if(data.id === event.target.getAttribute("data-item-id")){
                        if (data.inventory.$('input[name="'+event.target.getAttribute("data-item-size")+'"]:checked').val() > 0){}
                        else { alert("We are unfortunately all out of this size, please slect another style or size."); ok=false }
                    }
                  })
                })
            } catch(err){}
            if(ok){
                item += '", "name": "' + event.target.getAttribute("data-item-name") + '" },'
                var order = localStorage.getItem("log")+ item
                localStorage.setItem("log", order)
                //console.log(localStorage.getItem("log").slice(0, -1)+"]}")
                var cartnum = JSON.parse(localStorage.getItem("log").slice(0, -1)+"]}")["orders"].length
                document.getElementById("cartBtn").innerHTML = '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" alt="" title="" class="snipcart-cart-header__icon snipcart__icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M51.714 20.47L55 60H9l3.286-39.53h9.857v-6.588C22.143 8.424 26.556 4 32 4c5.444 0 9.857 4.424 9.857 9.882v6.589h9.857zM25.43 13.883v16.47h-3.286v-6.587h-6.834l-2.737 32.94h38.856l-2.737-32.94h-6.834v6.588h-3.286v-16.47c0-3.634-2.947-6.589-6.571-6.589-3.624 0-6.571 2.955-6.571 6.588zm3.285 9.883V20.47h6.572v3.294h-6.572z" fill="#e43d3d"></path></svg> '+ cartnum
            }
        }else{
            alert("Please select a size")
        }

    }else if(!(event.target.getAttribute("data-item-size") === null)){
        if(!($('input[name="'+event.target.getAttribute("data-item-size")+'"]:checked').val() === undefined)){
            //console.log(event.target.getAttribute("data-item-id"))
            var currShip = localStorage.getItem("shipCoeff");
            event.target.getAttribute("data-item-shipCoeff")
            localStorage.setItem("shipCoeff", ( event.target.getAttribute("data-item-shipCoeff") + currShip))
            var item = "{ ";
            item += '"id": "' + event.target.getAttribute("data-item-id")
            item += '", "price": "' + event.target.getAttribute("data-item-price")
            item += '", "description": "' + event.target.getAttribute("data-item-description")
            item += '", "ship": "' + event.target.getAttribute("data-item-shipCoeff")
            item += '", "image": "'+ event.target.getAttribute("data-item-image")
            try {
                item += '", "size": "'+ $('input[name="'+event.target.getAttribute("data-item-size")+'"]:checked').val()
            } catch (error) { }
            item += '", "name": "' + event.target.getAttribute("data-item-name") + '" },'
            var order = localStorage.getItem("log")+ item
            localStorage.setItem("log", order)
            //console.log(localStorage.getItem("log").slice(0, -1)+"]}")
            var cartnum = JSON.parse(localStorage.getItem("log").slice(0, -1)+"]}")["orders"].length
            document.getElementById("cartBtn").innerHTML = '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" alt="" title="" class="snipcart-cart-header__icon snipcart__icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M51.714 20.47L55 60H9l3.286-39.53h9.857v-6.588C22.143 8.424 26.556 4 32 4c5.444 0 9.857 4.424 9.857 9.882v6.589h9.857zM25.43 13.883v16.47h-3.286v-6.587h-6.834l-2.737 32.94h38.856l-2.737-32.94h-6.834v6.588h-3.286v-16.47c0-3.634-2.947-6.589-6.571-6.589-3.624 0-6.571 2.955-6.571 6.588zm3.285 9.883V20.47h6.572v3.294h-6.572z" fill="#e43d3d"></path></svg> '+ cartnum
        }else{
            alert("Please select a size")
        }

    }else if(!(event.target.getAttribute("data-item-orientation") === null)){
        if(!($('input[name="'+event.target.getAttribute("data-item-orientation")+'"]:checked').val() === undefined)){
            //console.log(event.target.getAttribute("data-item-id"))
            var currShip = localStorage.getItem("shipCoeff");
            event.target.getAttribute("data-item-shipCoeff")
            localStorage.setItem("shipCoeff", ( event.target.getAttribute("data-item-shipCoeff") + currShip))
            var item = "{ ";
            item += '"id": "' + event.target.getAttribute("data-item-id")
            item += '", "price": "' + event.target.getAttribute("data-item-price")
            item += '", "description": "' + event.target.getAttribute("data-item-description")
            item += '", "ship": "' + event.target.getAttribute("data-item-shipCoeff")
            item += '", "image": "'+ event.target.getAttribute("data-item-image")
            try {
                item += '", "orientation": "'+ $('input[name="'+event.target.getAttribute("data-item-orientation")+'"]:checked').val()
            } catch (error) { }
            item += '", "name": "' + event.target.getAttribute("data-item-name") + '" },'
            var order = localStorage.getItem("log")+ item
            localStorage.setItem("log", order)
            //console.log(localStorage.getItem("log").slice(0, -1)+"]}")
            var cartnum = JSON.parse(localStorage.getItem("log").slice(0, -1)+"]}")["orders"].length
            document.getElementById("cartBtn").innerHTML = '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" alt="" title="" class="snipcart-cart-header__icon snipcart__icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M51.714 20.47L55 60H9l3.286-39.53h9.857v-6.588C22.143 8.424 26.556 4 32 4c5.444 0 9.857 4.424 9.857 9.882v6.589h9.857zM25.43 13.883v16.47h-3.286v-6.587h-6.834l-2.737 32.94h38.856l-2.737-32.94h-6.834v6.588h-3.286v-16.47c0-3.634-2.947-6.589-6.571-6.589-3.624 0-6.571 2.955-6.571 6.588zm3.285 9.883V20.47h6.572v3.294h-6.572z" fill="#e43d3d"></path></svg> '+ cartnum
        }else{
            alert("Please select an orientation")
        }

    }else{
        //console.log(event.target.getAttribute("data-item-id"))
        var currShip = localStorage.getItem("shipCoeff");
        event.target.getAttribute("data-item-shipCoeff")
        localStorage.setItem("shipCoeff", ( event.target.getAttribute("data-item-shipCoeff") + currShip))
        var item = "{ ";
        item += '"id": "' + event.target.getAttribute("data-item-id")
        item += '", "price": "' + event.target.getAttribute("data-item-price")
        item += '", "description": "' + event.target.getAttribute("data-item-description")
        item += '", "ship": "' + event.target.getAttribute("data-item-shipCoeff")
        item += '", "image": "'+ event.target.getAttribute("data-item-image")
        try {
            item += '", "color": "'+ $('input[name="'+event.target.getAttribute("data-item-color")+'"]:checked').val()
        } catch (error) { }
        try {
            item += '", "size": "'+ $('input[name="'+event.target.getAttribute("data-item-size")+'"]:checked').val()
        } catch (error) { }
        item += '", "name": "' + event.target.getAttribute("data-item-name") + '" },'
        var order = localStorage.getItem("log")+ item
        localStorage.setItem("log", order)
        //console.log(localStorage.getItem("log").slice(0, -1)+"]}")
        var cartnum = JSON.parse(localStorage.getItem("log").slice(0, -1)+"]}")["orders"].length
        document.getElementById("cartBtn").innerHTML = '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" alt="" title="" class="snipcart-cart-header__icon snipcart__icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M51.714 20.47L55 60H9l3.286-39.53h9.857v-6.588C22.143 8.424 26.556 4 32 4c5.444 0 9.857 4.424 9.857 9.882v6.589h9.857zM25.43 13.883v16.47h-3.286v-6.587h-6.834l-2.737 32.94h38.856l-2.737-32.94h-6.834v6.588h-3.286v-16.47c0-3.634-2.947-6.589-6.571-6.589-3.624 0-6.571 2.955-6.571 6.588zm3.285 9.883V20.47h6.572v3.294h-6.572z" fill="#e43d3d"></path></svg> '+ cartnum

    }
}


const expandbtn = document.getElementById("expand");
var toggle = true
expandbtn.onclick = function () {
    
    if(toggle){
        
        // document.getElementById("allproducts").style.height = "auto"
        document.getElementById("expand").innerHTML = "-"

        firebase
        .firestore()
        .collection('All_Products')
        .onSnapshot((snapshot) => {
          snapshot.forEach((doc) => {
            const data = doc.data();
            // console.log(data)
            if(!(data.color === null) && !(data.size ===null) && !(data.orientation ===null)){
                if(data.thumbimage === null){
                    MakeProduct(data.title, data.description, data.price, data.image, data.image, data.id, data.size, data.color, data.orientation, data.ship)
                }else{
                    MakeProduct(data.title, data.description, data.price, data.image, data.thumbimage, data.id,  data.size, data.color, data.orientation, data.ship)
                }
            }
            else if(!(data.color === null) && !(data.size ===null)){
                if(data.thumbimage === null){
                    MakeProduct(data.title, data.description, data.price, data.image, data.image, data.id, data.size, data.color, false, data.ship)
                }else{
                    MakeProduct(data.title, data.description, data.price, data.image, data.thumbimage, data.id,  data.size, data.color, false, data.ship)
                }
            }
            else if(!(data.color === null) && !(data.orientation ===null)){
                if(data.thumbimage === null){
                    MakeProduct(data.title, data.description, data.price, data.image, data.image, data.id, false, data.color, data.orientation, data.ship)
                }else{
                    MakeProduct(data.title, data.description, data.price, data.image, data.thumbimage, data.id, false, data.color, data.orientation, data.ship)
                }
            }
            else if(!(data.size ===null) && !(data.orientation ===null)){
                if(data.thumbimage === null){
                    MakeProduct(data.title, data.description, data.price, data.image, data.image, data.id, data.size, false, data.orientation, data.ship)
                }else{
                    MakeProduct(data.title, data.description, data.price, data.image, data.thumbimage, data.id,  data.size, false, data.orientation, data.ship)
                }
            }else if(!(data.color === null)){
                if(data.thumbimage === null){
                    MakeProduct(data.title, data.description, data.price, data.image, data.image, data.id, false, data.color, false, data.ship)
                }else{
                    MakeProduct(data.title, data.description, data.price, data.image, data.thumbimage, data.id, false, data.color, false, data.ship)
                }
            }else if(!(data.size ===null)&&!(data.checkinventory ===null)){
                if(data.thumbimage === null){
                    MakeProduct(data.title, data.description, data.price, data.image, data.image, data.id, data.size, false, false, data.ship)
                }else{
                    MakeProduct(data.title, data.description, data.price, data.image, data.thumbimage, data.id, data.size, false, false, data.ship)
                }
            }else if(!(data.size ===null)){
                if(data.thumbimage === null){
                    MakeProduct(data.title, data.description, data.price, data.image, data.image, data.id, data.size, false, false, data.ship)
                }else{
                    MakeProduct(data.title, data.description, data.price, data.image, data.thumbimage, data.id, data.size, false, false, data.ship)
                }
            }else if(!(data.orientation ===null)){
                if(data.thumbimage === null){
                    MakeProduct(data.title, data.description, data.price, data.image, data.image, data.id, false, false, data.orientation, data.ship)
                }else{
                    MakeProduct(data.title, data.description, data.price, data.image, data.thumbimage, data.id, false, false, data.orientation, data.ship)
                }
            }else{
                if(data.thumbimage === null){
                    MakeProduct(data.title, data.description, data.price, data.image, data.image, data.id, false, false, false, data.ship)
                }else{
                    MakeProduct(data.title, data.description, data.price, data.image, data.thumbimage, data.id, false, false, false, data.ship)
                }
            }
            
          })
        })
        setTimeout(function(){
            document.getElementById("allproducts").style.display = "block"
            var buttons = document.querySelectorAll('.snipcart-add-item-temp').length;
            for (var i = 0; i < buttons ; i++) {
                document.getElementsByClassName("snipcart-add-item-temp")[i].addEventListener("click", (event) => {setupAddToCart(event)});
            }
        },2000);

        toggle=false
    }
    else if(!toggle){
        document.getElementById("allproducts").style.display = "none"
        // document.getElementById("allproducts").style.height = "auto"
        document.getElementById("expand").innerHTML = "+"
        document.getElementById("allproducts").innerHTML = "";
        toggle=true
    }
}


const expandApparellbtn = document.getElementById("expandApparell");
var toggle2 = true
expandApparellbtn.onclick = function () {
    
    if(toggle2){
        
        // document.getElementById("allproducts").style.height = "auto"
        document.getElementById("expandApparell").innerHTML = "-"

        firebase
        .firestore()
        .collection('Apparell')
        .onSnapshot((snapshot) => {
          snapshot.forEach((doc) => {
            const data = doc.data();
            console.log(data)
            
            if(!(data.color === null) && !(data.size ===null) && !(data.orientation ===null)){
                console.log("catcher", data)
                if(data.thumbimage === null){
                    MakeApparellProduct(data.title, data.description, data.price, data.image, data.image, data.id, data.size, data.color, data.orientation, data.ship, data.hatcolor)
                }else{
                    MakeApparellProduct(data.title, data.description, data.price, data.image, data.thumbimage, data.id,  data.size, data.color, data.orientation, data.ship, data.hatcolor)
                }
            }
            else if(!(data.color === null) && !(data.size ===null)){
                if(data.thumbimage === null){
                    MakeApparellProduct(data.title, data.description, data.price, data.image, data.image, data.id, data.size, data.color, false, data.ship, false)
                }else{
                    MakeApparellProduct(data.title, data.description, data.price, data.image, data.thumbimage, data.id,  data.size, data.color, false, data.ship, false)
                }
            }
            else if(!(data.color === null) && !(data.orientation ===null)){
                if(data.thumbimage === null){
                    MakeApparellProduct(data.title, data.description, data.price, data.image, data.image, data.id, false, data.color, data.orientation, data.ship, false)
                }else{
                    MakeApparellProduct(data.title, data.description, data.price, data.image, data.thumbimage, data.id, false, data.color, data.orientation, data.ship, false)
                }
            }
            else if(!(data.size ===null) && !(data.orientation ===null)){
                if(data.thumbimage === null){
                    MakeApparellProduct(data.title, data.description, data.price, data.image, data.image, data.id, data.size, false, data.orientation, data.ship, false)
                }else{
                    MakeApparellProduct(data.title, data.description, data.price, data.image, data.thumbimage, data.id,  data.size, false, data.orientation, data.ship, false)
                }
            }else if(!(data.color === null)){
                if(data.thumbimage === null){
                    MakeApparellProduct(data.title, data.description, data.price, data.image, data.image, data.id, false, data.color, false, data.ship, false)
                }else{
                    MakeApparellProduct(data.title, data.description, data.price, data.image, data.thumbimage, data.id, false, data.color, false, data.ship, false)
                }
            }else if(!(data.hatcolor === null)){
                
                if(data.thumbimage === null){
                    MakeApparellProduct(data.title, data.description, data.price, data.image, data.image, data.id, false, data.color, false, data.ship, data.hatcolor)
                }else{
                    MakeApparellProduct(data.title, data.description, data.price, data.image, data.thumbimage, data.id, false, data.color, false, data.ship, data.hatcolor)
                }
            }else if(!(data.size ===null)&&!(data.checkinventory ===null)){
                if(data.thumbimage === null){
                    MakeApparellProduct(data.title, data.description, data.price, data.image, data.image, data.id, data.size, false, false, data.ship, false)
                }else{
                    MakeApparellProduct(data.title, data.description, data.price, data.image, data.thumbimage, data.id, data.size, false, false, data.ship, false)
                }
            }else if(!(data.size ===null)){
                if(data.thumbimage === null){
                    MakeApparellProduct(data.title, data.description, data.price, data.image, data.image, data.id, data.size, false, false, data.ship, false)
                }else{
                    MakeApparellProduct(data.title, data.description, data.price, data.image, data.thumbimage, data.id, data.size, false, false, data.ship, false)
                }
            }else if(!(data.orientation ===null)){
                if(data.thumbimage === null){
                    MakeApparellProduct(data.title, data.description, data.price, data.image, data.image, data.id, false, false, data.orientation, data.ship, false)
                }else{
                    MakeApparellProduct(data.title, data.description, data.price, data.image, data.thumbimage, data.id, false, false, data.orientation, data.ship, false)
                }
            }else{
                console.log("catcher"+ data)
                if(data.thumbimage === null){
                    MakeApparellProduct(data.title, data.description, data.price, data.image, data.image, data.id, false, false, data.ship, false)
                }else{
                    MakeApparellProduct(data.title, data.description, data.price, data.image, data.thumbimage, data.id, false, false, data.ship, false)
                }
            }
            
          })
        })
        setTimeout(function(){
            document.getElementById("Apparell").style.display = "block"
            var buttons = document.querySelectorAll('.snipcart-add-item-temp').length;
            for (var i = 0; i < buttons ; i++) {
                document.getElementsByClassName("snipcart-add-item-temp")[i].addEventListener("click", (event) => {setupAddToCart(event)});
            }
        },2000);

        toggle2=false
    }
    else if(!toggle2){
        document.getElementById("Apparell").style.display = "none"
        // document.getElementById("allproducts").style.height = "auto"
        document.getElementById("expandApparell").innerHTML = "+"
        document.getElementById("Apparell").innerHTML = "";
        toggle2=true
    }
}
localStorage.setItem("CouponCoeffShip", 1)
localStorage.setItem("CouponCoeff", 1)
const cartbtn = document.getElementById("cartBtn");
cartbtn.onclick = function () {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    document.getElementById("cartOverlay").style.display = "block"
    document.getElementById("cartOverlay").style.width = "100vw"
    setTimeout(function(){
        document.getElementById("wrapper").style.display = "none"
    },500);
    var CartList = "<br>";
    var total = 0.0
    var ship = 0.0

    var index = 0
    JSON.parse(localStorage.getItem("log").slice(0, -1)+"]}")["orders"].forEach((item) => {
        CartList = CartList + '<li><img style="height: 50px;" src="'+item["image"]+'"/><h3>'+item["name"]+'</h3><p>'+item["description"]+'<br>$'+item["price"]+'<br><a href="#" onclick="removeElem('+index+')">remove</a></p></li>'
        total =  total + parseFloat(item["price"])
        ship =  ship + parseFloat(item["ship"])
        index++;
    })
    localStorage.setItem("shipCoeff", ship)
    var shipCoeff = localStorage.getItem("shipCoeff")
    var CouponCoeffShip = localStorage.getItem("CouponCoeffShip")
    var CouponCoeff = localStorage.getItem("CouponCoeff")
    var ship = (8*shipCoeff*CouponCoeffShip);
    if((8*shipCoeff*CouponCoeffShip) > 32){
        ship = 32
        total = (total+32)*CouponCoeff
    }else{
        total = (total+(8*shipCoeff*CouponCoeffShip))*CouponCoeff
    }
    if (total < localStorage.getItem("GCAmount")){
        localStorage.setItem("newbalance", localStorage.getItem("GCAmount") - total)

        total = 0;
    }else{
        total = total - localStorage.getItem("GCAmount")
    }

    document.getElementById("cartList").innerHTML = CartList + "Shipping and Handling: + $"+parseFloat(ship.toFixed(2))*CouponCoeffShip+"<br><br><p>Total: $"+parseFloat(total.toFixed(2))+"</p>"
    localStorage.setItem("total", parseFloat(total.toFixed(2)))

}
function removeElem(index){
    //console.log(localStorage.getItem("log").slice(0, -1)+"]}")
    var orders = JSON.parse(localStorage.getItem("log").slice(0, -1)+"]}");
    var suborders = orders["orders"]
    //console.log("suborders , " , JSON.stringify(suborders))
    suborders.splice(index, 1);
    
    orders["orders"] = suborders
    var cartnum = suborders.length
    document.getElementById("cartBtn").innerHTML = '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" alt="" title="" class="snipcart-cart-header__icon snipcart__icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M51.714 20.47L55 60H9l3.286-39.53h9.857v-6.588C22.143 8.424 26.556 4 32 4c5.444 0 9.857 4.424 9.857 9.882v6.589h9.857zM25.43 13.883v16.47h-3.286v-6.587h-6.834l-2.737 32.94h38.856l-2.737-32.94h-6.834v6.588h-3.286v-16.47c0-3.634-2.947-6.589-6.571-6.589-3.624 0-6.571 2.955-6.571 6.588zm3.285 9.883V20.47h6.572v3.294h-6.572z" fill="#e43d3d"></path></svg> '+ cartnum
    if(cartnum > 0 ){
            localStorage.setItem("log", JSON.stringify(orders).slice(0, -2)+",")
            //console.log(localStorage.getItem("log").slice(0, -1)+"]}")
            var CartList = "<br>";
            var total = 0.0
            var ship = 0.0
            var index = 0
            JSON.parse(localStorage.getItem("log").slice(0, -1)+"]}")["orders"].forEach((item) => {
                CartList = CartList + '<li><img style="height: 50px;" src="'+item["image"]+'"/><h3>'+item["name"]+'</h3><p>'+item["description"]+'<br>$'+item["price"]+'<br><a href="#" onclick="removeElem('+index+')">remove</a></p></li>'
                total =  total + parseFloat(item["price"])
                ship =  ship + parseFloat(item["ship"])
                index++;

            })
            localStorage.setItem("shipCoeff", ship)
            var shipCoeff = localStorage.getItem("shipCoeff")
            var CouponCoeffShip = localStorage.getItem("CouponCoeffShip")
            var CouponCoeff = localStorage.getItem("CouponCoeff")
            var ship = (8*shipCoeff*CouponCoeffShip);
            if((8*shipCoeff*CouponCoeffShip) > 32){
                ship = 32
                total = (total+32)*CouponCoeff
            }else{
                total = (total+(8*shipCoeff*CouponCoeffShip))*CouponCoeff
            }
            if (total < localStorage.getItem("GCAmount")){
                localStorage.setItem("newbalance", localStorage.getItem("GCAmount") - total)

                total = 0;
            }else{
                total = total - localStorage.getItem("GCAmount")
            }
            document.getElementById("cartList").innerHTML = CartList + "Shipping and Handling: + $"+parseFloat(ship.toFixed(2))*CouponCoeffShip+"<br><br><p>Total: $"+parseFloat(total.toFixed(2))+"</p>"
            localStorage.setItem("total", parseFloat(total.toFixed(2)))
            return  
    }
    else{
        localStorage.setItem("log", JSON.stringify(orders).slice(0, -2))
        //console.log(localStorage.getItem("log")+"]}")
        var CartList = "<br>";
        var total = 0.0
        var index = 0
        var ship = 0.0
        JSON.parse(localStorage.getItem("log")+"]}")["orders"].forEach((item) => {
            CartList = CartList + '<li><img style="height: 50px;" src="'+item["image"]+'"/><h3>'+item["name"]+'</h3><p>'+item["description"]+'<br>$'+item["price"]+'<br><a href="#" onclick="removeElem('+index+')">remove</a></p></li>'
            total =  total + parseFloat(item["price"])
            ship =  ship + parseFloat(item["ship"])
            index++;
        })
        localStorage.setItem("shipCoeff", ship)
        var shipCoeff = localStorage.getItem("shipCoeff")

        var CouponCoeffShip = localStorage.getItem("CouponCoeffShip")
        var CouponCoeff = localStorage.getItem("CouponCoeff")
        var ship = (8*shipCoeff*CouponCoeffShip);
        if((8*shipCoeff*CouponCoeffShip) > 32){
            ship = 32
            total = (total+32)*CouponCoeff
        }else{
            total = (total+(8*shipCoeff*CouponCoeffShip))*CouponCoeff
        }
        if (total < localStorage.getItem("GCAmount")){
            localStorage.setItem("newbalance", localStorage.getItem("GCAmount") - total)

            total = 0;
        }else{
            total = total - localStorage.getItem("GCAmount")
        }
        document.getElementById("cartList").innerHTML = CartList + "Shipping and Handling: + $"+parseFloat(ship.toFixed(2))*CouponCoeffShip+"<br><br><p>Total: $"+parseFloat(total.toFixed(2))+"</p>"
        localStorage.setItem("total", parseFloat(total.toFixed(2)))
        return
    }
        

}
function refreshCart(){
    //console.log(localStorage.getItem("log").slice(0, -1)+"]}")
    var orders = JSON.parse(localStorage.getItem("log").slice(0, -1)+"]}");
    var suborders = orders["orders"]
    //console.log("suborders , " , JSON.stringify(suborders))
    
    orders["orders"] = suborders
    var cartnum = suborders.length
    document.getElementById("cartBtn").innerHTML = '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" alt="" title="" class="snipcart-cart-header__icon snipcart__icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M51.714 20.47L55 60H9l3.286-39.53h9.857v-6.588C22.143 8.424 26.556 4 32 4c5.444 0 9.857 4.424 9.857 9.882v6.589h9.857zM25.43 13.883v16.47h-3.286v-6.587h-6.834l-2.737 32.94h38.856l-2.737-32.94h-6.834v6.588h-3.286v-16.47c0-3.634-2.947-6.589-6.571-6.589-3.624 0-6.571 2.955-6.571 6.588zm3.285 9.883V20.47h6.572v3.294h-6.572z" fill="#e43d3d"></path></svg> '+ cartnum
    if(cartnum > 0 ){
            localStorage.setItem("log", JSON.stringify(orders).slice(0, -2)+",")
            //console.log(localStorage.getItem("log").slice(0, -1)+"]}")
            var CartList = "<br>";
            var total = 0.0
            var ship = 0.0
            var index = 0
            JSON.parse(localStorage.getItem("log").slice(0, -1)+"]}")["orders"].forEach((item) => {
                CartList = CartList + '<li><img style="height: 50px;" src="'+item["image"]+'"/><h3>'+item["name"]+'</h3><p>'+item["description"]+'<br>$'+item["price"]+'<br><a href="#" onclick="removeElem('+index+')">remove</a></p></li>'
                total =  total + parseFloat(item["price"])
                ship =  ship + parseFloat(item["ship"])
                index++;

            })
            localStorage.setItem("shipCoeff", ship)
            var shipCoeff = localStorage.getItem("shipCoeff")
            var CouponCoeffShip = localStorage.getItem("CouponCoeffShip")
            var CouponCoeff = localStorage.getItem("CouponCoeff")
            var ship = (8*shipCoeff*CouponCoeffShip);
            if((8*shipCoeff*CouponCoeffShip) > 32){
                ship = 32
                total = (total+32)*CouponCoeff
            }else{
                total = (total+(8*shipCoeff*CouponCoeffShip))*CouponCoeff
            }
            if (total < localStorage.getItem("GCAmount")){
                localStorage.setItem("newbalance", localStorage.getItem("GCAmount") - total)

                total = 0;
            }else{
                total = total - localStorage.getItem("GCAmount")
            }
            
            document.getElementById("cartList").innerHTML = CartList + "Shipping and Handling: + $"+parseFloat(ship.toFixed(2))*CouponCoeffShip+"<br><br><p>Total: $"+parseFloat(total.toFixed(2))+"</p>"
            localStorage.setItem("total", parseFloat(total.toFixed(2)))
            return  
    }
    else{
        localStorage.setItem("log", JSON.stringify(orders).slice(0, -2))
        //console.log(localStorage.getItem("log")+"]}")
        var CartList = "<br>";
        var total = 0.0
        var index = 0
        var ship = 0.0
        JSON.parse(localStorage.getItem("log")+"]}")["orders"].forEach((item) => {
            CartList = CartList + '<li><img style="height: 50px;" src="'+item["image"]+'"/><h3>'+item["name"]+'</h3><p>'+item["description"]+'<br>$'+item["price"]+'<br><a href="#" onclick="removeElem('+index+')">remove</a></p></li>'
            total =  total + parseFloat(item["price"])
            ship =  ship + parseFloat(item["ship"])
            index++;
        })
        localStorage.setItem("shipCoeff", ship)
        var shipCoeff = localStorage.getItem("shipCoeff")
        var CouponCoeffShip = localStorage.getItem("CouponCoeffShip")
        var CouponCoeff = localStorage.getItem("CouponCoeff")
        var ship = (8*shipCoeff*CouponCoeffShip);
        if((8*shipCoeff*CouponCoeffShip) > 32){
            ship = 32
            total = (total+32)*CouponCoeff
        }else{
            total = (total+(8*shipCoeff*CouponCoeffShip))*CouponCoeff
        }
        
        if (total < localStorage.getItem("GCAmount")){
            localStorage.setItem("newbalance", localStorage.getItem("GCAmount") - total)

            total = 0;
        }else{
            total = total - localStorage.getItem("GCAmount")
        }

        document.getElementById("cartList").innerHTML = CartList + "Shipping and Handling: + $"+parseFloat(ship.toFixed(2))*CouponCoeffShip+"<br><br><p>Total: $"+parseFloat(total.toFixed(2))+"</p>"
        localStorage.setItem("total", parseFloat(total.toFixed(2)))
        return
    }
        

}
const backbtn = document.getElementById("back");
backbtn.onclick = function () {
    document.getElementById("cartOverlay").style.display = "none"
    document.getElementById("cartOverlay").style.width = "0vw"
    document.getElementById("wrapper").style.display = "block"

}

function open(){
    document.getElementById("cartOverlay").style.opacity = "1"
    document.getElementById("wrapper").style.opacity = ".5"

}
function close(){
    document.getElementById("cartOverlay").style.opacity = ".5"
    document.getElementById("wrapper").style.opacity = "1"

}
function popup(id) {
    //console.log(id+"Popup")
    var popup = document.getElementById(id+"Popup");
    // popup.style.visibility = "visible"
    popup.classList.toggle("show");
  }
  function popdown(id) {
    //console.log(id+"Popup")
    var popup = document.getElementById(id+"Popup");
    // popup.style.visibility = "visible"
    popup.classList.toggle("show");
  }


// document.getElementById("wrapper").addEventListener('click', function(e) {var spot = document.getElementByClassname("snipcart-featured-payment-methods")[0]
// var checkoutbutton = spot.createElement('button')
// checkoutbutton.innerHTML = "Checkout" });


localStorage.setItem("log", '{"orders": [')


    var buttons = document.querySelectorAll('.snipcart-add-item').length;
    for (var i = 0; i < buttons ; i++) {
        document.getElementsByClassName("snipcart-add-item")[i].addEventListener("click", (event) => {

            setupAddToCart(event)
        });
    }

//   .addEventListener('click', async (event) => {
//     //console.log(event.target.getAttribute("data-item-id"))
//   })

document
  .querySelector('#coupon-code')
  .addEventListener('submit', async (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const code = form.get('code');
    firebase
    .firestore()
    .collection('Coupons')
    .onSnapshot((snapshot) => {
        var luck = false;
      snapshot.forEach((doc) => {
          var data = doc.data();
          //console.log(code)
          //console.log(data.code)
        if(code === data.code){
            localStorage.setItem("CouponCoeffShip", data.shipping)
            localStorage.setItem("CouponCoeff", data.percent)
            document.getElementById("CouponResponse").innerHTML = "Submitted!"
            luck = true;
        } 
      })
      if(!luck){
        document.getElementById("CouponResponse").innerHTML = "This Code is not Recognized."
      }
      try {
        refreshCart()

      } catch (error) {
        
      }
    })

  })

  document
  .querySelector('#gift-cert')
  .addEventListener('submit', async (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const code = form.get('giftCard');
    firebase
    .firestore()
    .collection('GiftCert')
    .onSnapshot((snapshot) => {
        var luck = false;
      snapshot.forEach((doc) => {
          var data = doc.data();
          //console.log(code)
          console.log(doc.id)
        if(code === doc.id){
            localStorage.setItem("GCAmount", data.total)
            document.getElementById("CertResponse").innerHTML = "Submitted! Your Gift Certificate is at $"+data.total
            luck = true;
            localStorage.setItem("newbalance", 0)
            localStorage.setItem("newbalanceID", doc.id)
        } 
      })
      if(!luck){
        document.getElementById("CertResponse").innerHTML = "This Code is not Recognized."
      }
      try {
        refreshCart()

      } catch (error) {
        
      }
    })

  })

window.onload = function() {
    //console.log("Loaded");
    var byo = document.getElementById("byoOptions")
    var ship = 0.0;
    byoOptions.forEach(function(option) {
        if (option.checked) {
            byo.innerHTML = byo.innerHTML + '<input type="checkbox" name="' + option.id + '" id="' + option.id + '" ' + (option.checked ? 'checked' : '') + '><label id="'+option.id+'label" for="'+option.id+'">' + option.name + ' - $' + option.price + '</label>'+ '<div onmouseover="popup(\''+option.id+'\')" onmouseout="popdown(\''+option.id+'\')" class="popup" id="description'+option.id+'">&#9432;<div class="popuptext" id="'+option.id+'Popup"><img style="width: 160px" src="'+option.image+'"/><br><p>'+option.description+'</p></div></div>'+'<br><br>';
            ship = ship + option.ship
            byoPrice += option.price;
            selectedNames.push("<br>"+option.name);
        }else{
            byo.innerHTML = byo.innerHTML + '<input type="checkbox" name="' + option.id + '" id="' + option.id + '" ' + (option.checked ? 'checked' : '') + '><label id="'+option.id+'label" for="'+option.id+'">' + option.name +' + $' + option.price + '</label>'+ '<div onmouseover="popup(\''+option.id+'\')" onmouseout="popdown(\''+option.id+'\')" class="popup" id="description'+option.id+'">&#9432;<span class="popuptext" id="'+option.id+'Popup"><img style="width: 160px" src="'+option.image+'"/><br><p>'+option.description+'</p></span></div>'+'<br><br>';

        }
        document.getElementById("byoButton").innerHTML = '<button class="snipcart-add-item-special" data-item-id="Custom" data-item-price="'+parseFloat(byoPrice.toFixed(2))+'" data-item-url="/" data-item-image="https://firebasestorage.googleapis.com/v0/b/redpatchoutdoors-test.appspot.com/o/logo-whitebg.jpg?alt=media&token=94e7c445-ecfc-4ea9-9784-370c1f47500d" data-item-color="byocolor" data-item-shipCoeff="'+ship+'" data-item-description="Build your own or add ons: '+selectedNames+'" data-item-name="Build your Own or Addons"> Add to cart</button>';
        document.getElementById("price").innerHTML = "$"+byoPrice;
        document.getElementsByClassName("snipcart-add-item-special")[0].addEventListener("click", (event) => {setupAddToCart(event) });
        
    })
    byoOptions.forEach(function(option) {setupHandlers(option)})
    function arrayRemove(arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }
    function setupHandlers(option){

        document.getElementById(option.id).addEventListener('change', function() {
            //console.log("Changed");
            if(this.checked) {
                document.getElementById(option.id+'label').innerHTML = option.name + ' - $' + option.price;
                // document.getElementById(option.id + "img").style.opacity = '1';
                byoPrice += option.price;
                ship = ship + option.ship
                selectedNames.push("<br>"+option.name);
            }else  {
                //console.log("option name: ", option.name)
                // document.getElementById(option.id + "img").style.opacity = '0';
                document.getElementById(option.id+'label').innerHTML = option.name + ' + $' + option.price;
                byoPrice -= option.price;
                ship = ship - option.ship
                selectedNames = arrayRemove(selectedNames, "<br>"+option.name);
            }
            //console.log(byoPrice);
            if(ship > 2.5){
                ship = 2.5;
            }
            document.getElementById("byoButton").innerHTML = '<button class="snipcart-add-item-special" data-item-id="Custom" data-item-price="'+parseFloat(byoPrice.toFixed(2))+'" data-item-url="/" data-item-image="https://firebasestorage.googleapis.com/v0/b/redpatchoutdoors-test.appspot.com/o/logo-whitebg.jpg?alt=media&token=94e7c445-ecfc-4ea9-9784-370c1f47500d" data-item-description="Build your own or add ons" data-item-color="byocolor" data-item-shipCoeff="'+ship+'"  data-item-name="Build your Own or Addons: '+selectedNames+' "> Add to cart</button>';
            document.getElementById("price").innerHTML = "$"+ parseFloat(byoPrice.toFixed(2));
            document.getElementsByClassName("snipcart-add-item-special")[0].addEventListener("click", (event) => {setupAddToCart(event)});
           
        })
        // document.getElementById("description"+option.id).addEventListener('onmouseover', function() {
        //     //console.log("hover");
        //     var popup = document.getElementById(option.id+"Popup");
        //     popup.classList.toggle("show");
        // })
        // document.getElementById("description"+option.id).addEventListener('onmouseout', function() {
        //     var info = document.getElementById("description"+option.id)
        //     info.innerHTML = "&#9432;"
        // })
    }
}

document
.querySelector('#GC')
.addEventListener('submit', async (event) => {
    event.preventDefault();

    const form = new FormData(event.target);
    const amount = Number(form.get('buyGC'));
    certificateSubmitted(amount)
    console.log(amount)
    document.location.href = "checkout/";
})

function certificateSubmitted(amount){
    localStorage.setItem("total", amount)
    localStorage.setItem("giftcert", 1)

    var order = '{"orders": [{ "id": "gift certificate", "price": "'+amount+'", "description": "Gift Certificate", "ship": "0", "image": "./images/logo.png", "name": "Gift Certificate" },'
    localStorage.setItem("log", order)

}


