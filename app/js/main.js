window.addEventListener('DOMContentLoaded', function() {


    function createReviewItems() {
        let reviewsView = document.querySelector('.reviews__view'),
            reviewsNav = document.querySelector('.reviews__nav');

        for (let i = 0; i < reviews.length; i++) {
            let navItem = document.createElement('div'),
                navWrapper = document.createElement('div'),
                navAvatar = document.createElement('img'),
                navTextBox = document.createElement('div'),
                navName = document.createElement('p'),
                navInsta = document.createElement('p');

            let viewItem = document.createElement('div'),
                viewWrapper = document.createElement('div'),
                viewProduct = document.createElement('img'),
                viewTextBox = document.createElement('div'),
                viewName = document.createElement('p'),
                viewText = document.createElement('p');

            navItem.classList.add('reviews__nav-item');
            navWrapper.classList.add('reviews__nav-item-inner');
            navAvatar.classList.add('reviews__nav-img');
            navTextBox.classList.add('reviews__nav-text-box');
            navName.classList.add('reviews__nav-name');
            navInsta.classList.add('reviews__nav-insta');

            viewItem.classList.add('reviews__view-item');
            viewWrapper.classList.add('reviews__view-wrapper');
            viewProduct.classList.add('reviews__view-img');
            viewTextBox.classList.add('reviews__view-text-box');
            viewName.classList.add('reviews__view-name');
            viewText.classList.add('reviews__view-text')

            navAvatar.setAttribute('alt', 'autor image');
            navAvatar.setAttribute('src', 'images/content/reviews/avatars/' + reviews[i].avatar);
            navAvatar.setAttribute('loading', 'lazy');
            navName.textContent = reviews[i].name;
            navInsta.textContent = reviews[i].insta;

            viewProduct.setAttribute('alt', 'product image');
            viewProduct.setAttribute('src', 'images/content/reviews/' + reviews[i].image);
            viewProduct.setAttribute('loading', 'lazy');
            viewName.textContent = reviews[i].name;
            viewText.textContent = reviews[i].text;

            navItem.appendChild(navWrapper);
            navWrapper.appendChild(navAvatar);
            navWrapper.appendChild(navTextBox);
            navTextBox.appendChild(navName);
            navTextBox.appendChild(navInsta)

            viewItem.appendChild(viewWrapper);
            viewWrapper.appendChild(viewProduct);
            viewWrapper.appendChild(viewTextBox);
            viewTextBox.appendChild(viewName);
            viewTextBox.appendChild(viewText);

            reviewsNav.appendChild(navItem);
            reviewsView.appendChild(viewItem);
        }
    }

    function createGalleryItems() {
        let galleryBox = document.querySelector('.gallery__slider');
        for (let i = 0; i < gallery.length; i++) {
            let image = document.createElement('img');
            image.classList.add('gallery__img');
            image.setAttribute('alt', 'gallery image');
            image.setAttribute('src', 'images/content/gallery/' + gallery[i]);
            galleryBox.appendChild(image);
        }

    }

    function createProductItems() {
        let cakesBox = document.querySelector('.assortment__box--cakes'),
            pastriesBox = document.querySelector('.assortment__box--pastries'),
            eclairsBox = document.querySelector('.assortment__box--eclairs'),
            bakeryBox = document.querySelector('.assortment__box--bakery'),
            semiBox = document.querySelector('.assortment__box--semi');

        for (let i = 0; i < products.length; i++) {
            let item = document.createElement('div'),
                image = document.createElement('img'),
                box = document.createElement('div'),
                title = document.createElement('h4'),
                discr = document.createElement('p'),
                price = document.createElement('p');

            item.classList.add('assortment__card');
            item.classList.add('card');
            image.classList.add('card__img');
            box.classList.add('card__text-box');
            title.classList.add('card__title');
            discr.classList.add('card__discription');
            price.classList.add('card__price');

            image.setAttribute('alt', 'product image');
            image.setAttribute('src', 'images/content/products/' + products[i].image);
            image.setAttribute('loading', 'lazy');

            title.textContent = products[i].name;
            discr.textContent = products[i].description;
            price.textContent = products[i].price + " ₽ / кг";

            item.appendChild(image);
            box.appendChild(title);
            box.appendChild(discr);
            box.appendChild(price);
            item.appendChild(box);

            let type = products[i].type;
            switch (type) {
                case 'торт':
                    cakesBox.appendChild(item);
                    break;
            }
        }
    }

    createGalleryItems();
    createProductItems();
    createReviewItems();

    callback();
})

var callback =
    $(function() {

        const tabsContent = document.querySelectorAll('.assortment__box');
        tabsContent.forEach(element => {
            $(element).addClass('hide');
            $(element).addClass('invisible');
        })
        $(tabsContent[0]).removeClass('hide');
        $(tabsContent[0]).removeClass('invisible');
        $('.assortment__filter-btn').on('click', function(event) {
            event.preventDefault;
            let targetName = $(event.target).attr('value'),
                activeBtn = $('.assortment__filter-btn--active'),
                activeContent = $('.assortment__box--active'),
                targetContent = $('.assortment__box--' + targetName);
            $(event.target).addClass('assortment__filter-btn--active');
            activeContent.addClass('invisible')
            setTimeout(function() {
                activeBtn.removeClass('assortment__filter-btn--active');
                activeContent.removeClass('assortment__box--active');
                activeContent.addClass('hide');
                targetContent.removeClass('hide');
                targetContent.removeClass('invisible');
                targetContent.addClass('assortment__box--active');
            }, 300);

        });

        $('.reviews__view').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.reviews__nav'
        });
        $('.reviews__nav').slick({
            vertical: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.reviews__view',
            dots: true,
            // centerMode: true,
            focusOnSelect: true
        });

        $('.gallery__slider').slick({
            dots: true,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true,
            pauseOnDotsHover: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1
        });

        // Плавный скролл
        $('.nav__link, .order-btn').on('click', function(event) {
            event.preventDefault();
            var id = $(this).attr('href');
            var element = $(id).offset().top;
            $('body,html').animate({
                scrollTop: element
            }, 500);
        });
    });