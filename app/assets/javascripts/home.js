function dimmingImage(img, imgSource, fadeTime, intervalTime, images, timeoutTime ) {
    var images2 = [];
    if (img[0] == '.') {
        for (var j = 0; j < images.length; j++) {
            images2.push((new Image()).src = imgSource + images[j]);
        };
    } else {
        for (var j = 0; j < images.length; j++) {
            images2.push((new Image()).src = images[j]);
        };
    }

    // image.css('background-image','url(/assets/main/header.png)');
    var i = 0;
    setTimeout(function() {
        setInterval(function dimming() {
            $(img).fadeOut(+fadeTime, function() {
                if (img[0] == '.') {
                    $(img).css('background-image', 'url(' + images2[i] + ')');
                } else {
                    $(img).attr('src', images2[i]);
                };
                
                
                console.log(i + ' img ' + images2[i]);
                $(img).fadeIn(+fadeTime);
            });
            i++;
            if (i === images2.length) {
                i = 0;
            };
            return dimming;
        }(), intervalTime);
    }, timeoutTime);
};

$(document).ready(dimmingImage('.homepage_background', 'http://bcstudio.biz', 2400, 5000,
    [
    '/assets/main/header1-fc12025e76733906be4f8a6f5629b2aa.jpg',
    '/assets/main/header-a4b4a242b74e979b7011b5cde58f0507.jpg',
    '/assets/main/header2-7477d14094d08691fe2fba3519037b25.jpg',
    '/assets/main/header5-e63c3678e5b92bc75de395e9edde09ad.jpg',
    '/assets/main/header4-e63aa3a7a0518f80151426b15a069b52.jpg',
    '/assets/main/header7-7491ad16ca7bb3c0b415f48884465552.jpg',
    '/assets/main/header6-a42b5ff57d3cf74ca8cf4988a1a20cbb.jpg',
    '/assets/main/header3-8ede039ffe851bc0fa63ab1182a2d37e.jpg'
    ], 2000));
$(document).ready(dimmingImage('#productBannerDim1', 'http://localhost:3000', 2400, 21000,
    ['/assets/products/a3-4cb4f02dad8afa35dfac6c81894326da.jpg','/assets/products/a31-454c357d4597e6156cd7b412b18d3a6d.jpg'],1000));
$(document).ready(dimmingImage('#productBannerDim2', 'http://localhost:3000', 2400, 21000,
    ['/assets/products/a4-7d6bfb4f85c6ebca512748202401f1cd.jpg','/assets/products/a41-f50afd126ad6833349d1e53f99d2b7af.jpg'],5000));
$(document).ready(dimmingImage('#productBannerDim3', 'http://localhost:3000', 2400, 21000,
    ['/assets/products/a7-d762de39ce30e8897215a069f1fbf281.jpg','/assets/products/a71-2e368114f6c2a371ca338b724fde6764.jpg'],9000));
$(document).ready(dimmingImage('#productBannerDim4', 'http://localhost:3000', 2400, 21000,
    ['/assets/products/a8-3582fadf43e1d69ab411fbf9e5103870.jpg','/assets/products/a81-d030d025ff05e1207a6d488a748011a9.jpg'],13000));
$(document).ready(dimmingImage('#productBannerDim5', 'http://localhost:3000', 800, 7000,
    ['/assets/products/l2-ecd1e5374c5833a42fb5383765a2779b.jpg','/assets/products/l21-a3e1e8468858013b6c6ab8e6eebcda8b.jpg'],17000));
$(document).ready(dimmingImage('.websiteDim1', 'http://bcstudio.biz', 800, 4000,
	['/assets/website/website01-e4be9c8ea3b58f9163e6cec2a520ec7f.jpg','/assets/website/website01b-da835e7e0c9b281b213a2c6eea994593.jpg'],1000));
$(document).ready(dimmingImage('.websiteDim2', 'http://bcstudio.biz', 800, 4000,
	['/assets/website/website02-f4c8c92e0ac95f928b4ce634b7834e1f.jpg','/assets/website/website02b-f5b19edb23c071f20b5989e0f4806724.jpg',
		'/assets/website/website02c-260e91c9118798b8d9f909b00a835adb.jpg','/assets/website/website02d-d6a9e2c07fb97a1f9786a666adfa3ca0.jpg'],2000));
$(document).ready(dimmingImage('.websiteDim3', 'http://bcstudio.biz', 800, 4000,
	['/assets/website/website03-e1e7b97b62fe1988696d344de3c2ea39.jpg','/assets/website/website03b-5bce1189f0184845625d5cba6ddb3925.jpg',
		'/assets/website/website03c-00c85e3f192162118f818be9a1f86df6.jpg','/assets/website/website03d-00243212baf98f4f3821ff99815b0c08.jpg',
		'/assets/website/website03e-bc69e4fd81d6f63cd39daccbc673a0f2.jpg','/assets/website/website03f-9f3ac82874dbbd0f7ee1a9497a9a3852.jpg'],3000));
    

//Show full image on click
var ready;
ready = function() {
	$(document).on("click", ".show-full-image", function() {
		$('.modal-body').empty();
	  	var title = $(this).parent('a').attr("title");
	  	var bg = $(this).css('background-image');
        bg = bg.replace('url(','').replace(')','');
	  	var width = getImgSize(bg);
      if (width > ($(window).width() * 0.9)) {
        width = $(window).width() * 0.9;
      };
	  	$('.modal-dialog').css('width', width + 40);
	  	var img = $("<img src = " + bg + " style=\"width:"+width+"px\" data-dismiss=\"modal\"/>")
	  	$(img).appendTo('.modal-body');
	  	$('#myModal').modal({show:true});
	});
};
$(document).ready(ready);
$(document).on('page:load', ready);

function getImgSize(imgSrc) {
    var newImg = new Image();
    newImg.src = imgSrc;
    var width = newImg.width;
    return width;
}

// var ready;
// ready = function() {
// 	$(".item").each(function(i, elem) {
//           var img = $(elem);
//           var div = $("<div />").css({
//             background: "url(" + img.attr("src") + ") center no-repeat",
//             width: img.width() + "px",
//             height: img.height() + "px",
// 			"background-size": "cover"
//           });
              
//           div.addClass("item");
//           div.addClass("show-full-image");
            
//           img.replaceWith(div);
//         });
// 	$(".item").fadeIn();
// };
// $(document).ready(ready);
// $(document).on('page:load', ready);
