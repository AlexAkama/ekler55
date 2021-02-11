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

            navItem.append(navWrapper);
            navWrapper.append(navAvatar);
            navWrapper.append(navTextBox);
            navTextBox.append(navName);
            navTextBox.append(navInsta)

            viewItem.append(viewWrapper);
            viewWrapper.append(viewProduct);
            viewWrapper.append(viewTextBox);
            viewTextBox.append(viewName);
            viewTextBox.append(viewText);

            reviewsNav.append(navItem);
            reviewsView.append(viewItem);
        }
    }

    function createGalleryItems() {
        let galleryBox = document.querySelector('.gallery__slider');
        for (let i = 0; i < gallery.length; i++) {
            let image = document.createElement('img');
            image.classList.add('gallery__img');
            image.setAttribute('alt', 'gallery image');
            image.setAttribute('src', 'images/content/gallery/' + gallery[i]);
            galleryBox.append(image);
        }

    }

    function createProductItems() {
        let cakesBox = document.querySelector('.assortment__box--cakes'),
            pastriesBox = document.querySelector('.assortment__box--pastries'),
            eclairsBox = document.querySelector('.assortment__box--eclairs'),
            bakeryBox = document.querySelector('.assortment__box--bakery'),
            semiBox = document.querySelector('.assortment__box--semi');

        for (let i = 0; i < products.length; i++) {
            let card = document.createElement('div'),
                image = document.createElement('img'),
                box = document.createElement('div'),
                textBox = document.createElement('div'),
                title = document.createElement('h4'),
                discr = document.createElement('p'),
                cart = document.createElement('div'),
                select = document.createElement('div'),
                priceBox = document.createElement('p'),
                price = document.createElement('span'),
                unit = document.createElement('span'),
                input = document.createElement('input'),
                btn = document.createElement('button');

            card.id = products[i].code;

            card.classList.add('assortment__card');
            card.classList.add('card');
            image.classList.add('card__img');
            box.classList.add('card__box');
            textBox.classList.add('card__text-box');
            cart.classList.add('card__to-cart-box');
            title.classList.add('card__title');
            discr.classList.add('card__discription');
            select.classList.add('card__select');
            priceBox.classList.add('card__price-box');
            price.classList.add('card__price')
            unit.classList.add('card__unit')
            input.classList.add('card__input');
            btn.classList.add('card__button')

            image.setAttribute('alt', 'product image');
            image.setAttribute('src', 'images/content/products/' + products[i].image);
            image.setAttribute('loading', 'lazy');
            input.setAttribute("type", "number");
            input.setAttribute("value", 1);
            input.setAttribute("min", 1);
            input.setAttribute("max", 99);

            title.textContent = products[i].name;
            discr.textContent = products[i].description;
            price.textContent = products[i].price;
            unit.textContent = products[i].unit;
            btn.textContent = "Добавить в корзину"

            card.append(image);
            textBox.append(title);
            textBox.append(discr);
            box.append(textBox);
            priceBox.append(price);
            priceBox.innerHTML = priceBox.innerHTML + " ₽ / ";
            priceBox.append(unit);
            select.append(priceBox);
            select.append(input);
            cart.append(select);
            cart.append(btn);
            box.append(cart);
            card.append(box);

            let type = products[i].type;
            switch (type) {
                case 'торт':
                    cakesBox.append(card);
                    break;
                case 'эклер':
                    eclairsBox.append(card);
                    break;
                case 'выпечка':
                    bakeryBox.append(card);
                    break;
            }
        }
    }

    createGalleryItems();
    createProductItems();
    createReviewItems();

    main();
})

var main =
    function() {

        // Табы в ассортименте
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

        // Стилизация инпута
        $('.card__input, .row__input').styler();

        // SlickSlider
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

        // События при прокрутке экрана
        $(window).on('scroll', function() {
            // Кнопка наверх
            if ($(this).scrollTop() > $('#cakes').offset().top - 200) {
                $('.top-btn').fadeIn();
            } else {
                $('.top-btn').fadeOut();
            }

            // Кнопка корзины
            count = Number(document.querySelector('.cart__counter').textContent);
            if ($(this).scrollTop() > $('#assortment').offset().top - 200 && count > 0) {
                $('.cart__btn').addClass('fixed-btn');
            } else {
                $('.cart__btn').removeClass('fixed-btn');
            }

        });
        // переход по кнопке наверх
        $('.top-btn').on('click', function() {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false;
        });


        //
        //  КОРЗИНА
        //

        // Открытие корзины
        $('.cart__btn').on('click', function(event) {
            event.preventDefault();
            reCalc();
            $('.info__wrapper').fadeIn();
            $('.cart').show();
            $('.confirm').hide();
            $('body').addClass('fixed');
        });
        // Закрытие корзины при нажатии вне
        $('.info').on('click', function(event) {
            if (!$(event.target).closest('.into').length) {
                hidePopPup();
            }
        });

        let rows = document.querySelector('.cart__row-box');
        // Добавление новой строки в корзину
        $('.card__button').on('click', function(event) {
            let card = event.target.parentElement.parentElement.parentElement,
                elementId = '#code' + card.id,
                element = document.querySelector(elementId);
            if (typeof element != 'undefined' && element != null) {
                element.querySelector('input.row__input').value =
                    Number(element.querySelector('input.row__input').value) +
                    Number(card.querySelector('input.card__input').value)
            } else {
                let type = 'Торт',
                    title = card.querySelector('.card__title').textContent,
                    count = card.querySelector('input.card__input').value,
                    price = card.querySelector('.card__price').textContent,
                    unit = card.querySelector('.card__unit').textContent,
                    row = createCartRow(
                        type,
                        title,
                        count,
                        price,
                        unit
                    );
                row.id = 'code' + card.id;
                rows.append(row);
                $('.row__input').styler();
            }
            reCalc();
        });

        // Создание новой строки для корзины
        function createCartRow(type, title, value, cost, unit) {
            let row = document.createElement('div'),
                text = document.createElement('p'),
                select = document.createElement('div'),
                box = document.createElement('div'),
                price = document.createElement('span'),
                per = document.createElement('span'),
                input = document.createElement('input'),
                btn = document.createElement('button');

            row.classList.add('cart__row');
            row.classList.add('row');
            text.classList.add('row__text');
            select.classList.add('row__select-box');
            box.classList.add('row__price-box');
            price.classList.add('row__price');
            per.classList.add('row__unit');
            input.classList.add('row__input');
            btn.classList.add('row__delete-btn');

            input.setAttribute('type', 'number');
            input.setAttribute('min', '1');
            input.setAttribute('max', '99');
            input.setAttribute('value', value);

            text.textContent = type + ' «' + title + '»';
            price.textContent = cost;
            per.textContent = unit;

            box.append(price);
            box.innerHTML = box.innerHTML + ' ₽/';
            box.append(per);

            select.append(box);
            select.append(input);

            row.append(text);
            row.append(select);
            row.append(btn);

            return row;
        }

        // Удаление строки в корзине
        $(document).on('click', '.row__delete-btn', function(event) {
            event.target.parentElement.remove();
            reCalc();
        });

        // Пресчет товара в корзине
        function reCalc() {
            let price = document.querySelectorAll('.row__price'),
                input = document.querySelectorAll('input.row__input'),
                total = document.querySelector('.cart__total-digit'),
                counter = document.querySelector('.cart__counter'),
                count = 0,
                sum = 0;
            if (price.length > 0) {
                for (let i = 0; i < price.length; i++) {
                    sum = sum + price[i].textContent * input[i].value;
                    count = count + Number(input[i].value);
                }

            }
            if (count > 0) {
                $(counter).fadeIn();
                $('.cart__total').show();
                $('.cart__total-text').text('Итого к оплате:');
                $('.cart__submit').text('Оформить заказ');
                $('.cart__btn').addClass('fixed-btn');
            } else {
                $(counter).fadeOut();
                $('.cart__total').hide();
                $('.cart__total-text').text('Корзина пуста');
                $('.cart__submit').text('Закрыть');
                $('.cart__btn').removeClass('fixed-btn');
            }
            if (count > 99) {
                count = "K+"
            }
            counter.textContent = count;
            total.textContent = sum;
        };

        // Обработка измениения кол-ва в корзине кнопками
        $(document).on('input', 'input.row__input', function() {
            reCalc();
        });

        // Подтверждение корзины (переход к вводу дперсональных данных)
        $('.cart__submit').on('click', function() {
            if ($('.cart__counter').text() == 0) {
                hidePopPup();
                return;
            }
            $('.cart').fadeOut();
            setTimeout(showConfirm, 500);
        });

        // Показ окна ввода персональных данных
        function showConfirm() {
            $('.confirm').fadeIn();
        }

        // Скрытие всплывающих окон
        function hidePopPup() {
            $('.info__wrapper').fadeOut();
            $('body').removeClass('fixed');
        }

    };