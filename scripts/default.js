// Query selectors
function $(selector, context){
    var $elem = (context || document).querySelectorAll(selector),
        elemCount = $elem.length;
    if(elemCount == 1){
        $elem = $elem[0];
    }else if(elemCount == 0){
        $elem = false;
    }
    return $elem;
}

function getPositions(){
    positions = {
        logo: {row: 4, cell: 5},
        slider: {row: 2, cell: 8},
        paging: {row: 1, cell: 10},
        categories: {row: 4, cell: 10},
        contact: {row: 5, cell: 10},
        letter: [
            {
                c: {row: 1, cell: 4},
                o1: {row: 2, cell: 11},
                m: {row: 3, cell: 8},
                i: {row: 1, cell: 8},
                n1: {row: 3, cell: 10},
                g: {row: 3, cell: 5},
                s: {row: 2, cell: 3},
                o2: {row: 4, cell: 2},
                o3: {row: 4, cell: 3},
                n2: {row: 5, cell: 7}
            },
            {
                c: {row: 3, cell: 2},
                o1: {row: 1, cell: 8},
                m: {row: 1, cell: 3},
                i: {row: 3, cell: 8},
                n1: {row: 2, cell: 11},
                g: {row: 4, cell: 6},
                s: {row: 5, cell: 8},
                o2: {row: 3, cell: 5},
                o3: {row: 4, cell: 11},
                n2: {row: 5, cell: 3}
            },
            {
                c: {row: 1, cell: 11},
                o1: {row: 3, cell: 5},
                m: {row: 5, cell: 11},
                i: {row: 3, cell: 8},
                n1: {row: 3, cell: 9},
                g: {row: 1, cell: 4},
                s: {row: 3, cell: 2},
                o2: {row: 3, cell: 11},
                o3: {row: 5, cell: 6},
                n2: {row: 5, cell: 3}
            }
        ]
    };

    if(pWidth <= 1366){
        positions = {
            logo: {row: 4, cell: 4},
            slider: {row: 2, cell: 7},
            paging: {row: 1, cell: 9},
            categories: {row: 4, cell: 9},
            contact: {row: 5, cell: 9},
            letter: [
                {
                    c: {row: 1, cell: 3},
                    o1: {row: 2, cell: 10},
                    m: {row: 3, cell: 7},
                    i: {row: 1, cell: 7},
                    n1: {row: 3, cell: 9},
                    g: {row: 3, cell: 4},
                    s: {row: 2, cell: 2},
                    o2: {row: 4, cell: 1},
                    o3: {row: 4, cell: 2},
                    n2: {row: 5, cell: 6}
                },
                {
                    c: {row: 3, cell: 1},
                    o1: {row: 1, cell: 7},
                    m: {row: 1, cell: 2},
                    i: {row: 3, cell: 7},
                    n1: {row: 2, cell: 10},
                    g: {row: 4, cell: 5},
                    s: {row: 5, cell: 7},
                    o2: {row: 3, cell: 4},
                    o3: {row: 4, cell: 10},
                    n2: {row: 5, cell: 2}
                },
                {
                    c: {row: 1, cell: 10},
                    o1: {row: 3, cell: 4},
                    m: {row: 5, cell: 10},
                    i: {row: 3, cell: 7},
                    n1: {row: 3, cell: 8},
                    g: {row: 1, cell: 3},
                    s: {row: 3, cell: 1},
                    o2: {row: 3, cell: 10},
                    o3: {row: 5, cell: 5},
                    n2: {row: 5, cell: 2}
                }
            ]
        };
    }

    if(pWidth <= 1024){
        positions = {
            logo: {row: 5, cell: 4},
            slider: {row: 2, cell: 7},
            paging: {row: 1, cell: 9},
            categories: {row: 4, cell: 9},
            contact: {row: 6, cell: 9},
            letter: [
                {
                    c: {row: 1, cell: 3},
                    o1: {row: 3, cell: 10},
                    m: {row: 4, cell: 7},
                    i: {row: 1, cell: 7},
                    n1: {row: 1, cell: 10},
                    g: {row: 4, cell: 4},
                    s: {row: 2, cell: 2},
                    o2: {row: 5, cell: 1},
                    o3: {row: 5, cell: 2},
                    n2: {row: 6, cell: 6}
                },{
                    c: {row: 1, cell: 10},
                    o1: {row: 3, cell: 10},
                    m: {row: 6, cell: 11},
                    i: {row: 4, cell: 7},
                    n1: {row: 4, cell: 8},
                    g: {row: 1, cell: 3},
                    s: {row: 4, cell: 1},
                    o2: {row: 4, cell: 4},
                    o3: {row: 6, cell: 5},
                    n2: {row: 6, cell: 2}
                },{
                    c: {row: 4, cell: 1},
                    o1: {row: 1, cell: 7},
                    m: {row: 1, cell: 3},
                    i: {row: 4, cell: 7},
                    n1: {row: 2, cell: 10},
                    g: {row: 5, cell: 5},
                    s: {row: 6, cell: 7},
                    o2: {row: 4, cell: 4},
                    o3: {row: 4, cell: 10},
                    n2: {row: 6, cell: 2}
                }
            ]
        };
    }

    if(pWidth <= 768){
        positions = {
            logo: {row: 7, cell: 2},
            slider: {row: 3, cell: 5},
            paging: {row: 2, cell: 6},
            categories: {row: 6, cell: 6},
            contact: {row: 8, cell: 6},
            letter: [
                {
                    c: {row: 1, cell: 2},
                    o1: {row: 1, cell: 6},
                    m: {row: 6, cell: 4},
                    i: {row: 2, cell: 4},
                    n1: {row: 5, cell: 7},
                    g: {row: 5, cell: 1},
                    s: {row: 2, cell: 1},
                    o2: {row: 8, cell: 3},
                    o3: {row: 8, cell: 4},
                    n2: {row: 6, cell: 2}
                },{
                    c: {row: 6, cell: 1},
                    o1: {row: 1, cell: 6},
                    m: {row: 1, cell: 1},
                    i: {row: 5, cell: 7},
                    n1: {row: 2, cell: 3},
                    g: {row: 8, cell: 4},
                    s: {row: 1, cell: 5},
                    o2: {row: 4, cell: 1},
                    o3: {row: 5, cell: 5},
                    n2: {row: 6, cell: 3}
                },{
                    c: {row: 2, cell: 2},
                    o1: {row: 5, cell: 1},
                    m: {row: 1, cell: 4},
                    i: {row: 8, cell: 4},
                    n1: {row: 3, cell: 1},
                    g: {row: 6, cell: 2},
                    s: {row: 8, cell: 3},
                    o2: {row: 6, cell: 4},
                    o3: {row: 6, cell: 7},
                    n2: {row: 5, cell: 6}
                }
            ]
        };
    }

    if(pWidth <= 480){
        positions = {
            logo: {row: 7, cell: 2},
            slider: {row: 0, cell: 0},
            paging: {row: 2, cell: 5},
            categories: {row: 4, cell: 5},
            contact: {row: 8, cell: 5},
            letter: [
                {
                    c: {row: 6, cell: 1},
                    o1: {row: 5, cell: 2},
                    m: {row: 5, cell: 3},
                    i: {row: 6, cell: 5},
                    n1: {row: 6, cell: 6},
                    g: {row: 9, cell: 3},
                    s: {row: 2, cell: 1},
                    o2: {row: 1, cell: 3},
                    o3: {row: 1, cell: 4},
                    n2: {row: 2, cell: 6}
                },
                {
                    c: {row: 6, cell: 2},
                    o1: {row: 5, cell: 3},
                    m: {row: 6, cell: 4},
                    i: {row: 5, cell: 5},
                    n1: {row: 5, cell: 6},
                    g: {row: 9, cell: 3},
                    s: {row: 2, cell: 1},
                    o2: {row: 1, cell: 3},
                    o3: {row: 1, cell: 5},
                    n2: {row: 4, cell: 1}
                },
                {
                    c: {row: 2, cell: 1},
                    o1: {row: 1, cell: 3},
                    m: {row: 1, cell: 5},
                    i: {row: 1, cell: 6},
                    n1: {row: 6, cell: 3},
                    g: {row: 9, cell: 2},
                    s: {row: 6, cell: 1},
                    o2: {row: 5, cell: 4},
                    o3: {row: 5, cell: 5},
                    n2: {row: 6, cell: 6}
                }
            ]
        };
    }

    return positions;
}

function changeLetterLayout(){
    var current = positions.letter.indexOf(activeLetterPos);

    var layoutOptions = Object.keys(positions.letter).map(function(key) {
        return positions.letter[key];
    });

    layoutOptions = layoutOptions.slice(0);
    layoutOptions.splice(current, 1);
    if(!layoutOptions.length){
        return false;
    }

    var newLayout = layoutOptions[Math.floor(Math.random() * layoutOptions.length)];
    activeLetterPos = newLayout;

    for(var y=0; y<contentItems.length; y++){
        var cName = contentItems[y].classList;
        var settings = null;

        if(cName.contains('letter-c')){settings = newLayout.c;}
        if(cName.contains('letter-o1')){settings = newLayout.o1;}
        if(cName.contains('letter-m')){settings = newLayout.m;}
        if(cName.contains('letter-i')){settings = newLayout.i;}
        if(cName.contains('letter-n1')){settings = newLayout.n1;}
        if(cName.contains('letter-g')){settings = newLayout.g;}
        if(cName.contains('letter-s')){settings = newLayout.s;}
        if(cName.contains('letter-o2')){settings = newLayout.o2;}
        if(cName.contains('letter-o3')){settings = newLayout.o3;}
        if(cName.contains('letter-n2')){settings = newLayout.n2;}

        if(settings){
            setTimeout(letterToggle,200*y,contentItems[y],1);
            setTimeout(letterReposition,1000+(200*y),contentItems[y],settings);
        }
    }
}

function letterToggle(elem,v){
    elem.classList.toggle('hide',v);
}

function letterReposition(elem,settings){
    var cell = $('.row.r'+settings.row+' .cell.c'+settings.cell);
    if(cell){cell.appendChild(elem);}
    setTimeout(letterToggle,200,elem,0);
}


function resize(){
    var rows = 5,
        cells = 12,
        setGridSize = 1920;

    if(pWidth <= 1366){
        rows = 5;
        cells = 10;
        setGridSize = 1366;
    }

    if(pWidth <= 1280){
        rows = 5;
        cells = 10;
        setGridSize = 1280;
    }

    if(pWidth <= 1024){
        rows = 6;
        cells = 11;
        setGridSize = 1024;
    }

    if(pWidth <= 768){
        rows = 8;
        cells = 7;
        setGridSize = 768;
    }

    if(pWidth <= 480){
        rows = 9;
        cells = 6;
        setGridSize = 480;
    }

    getPositions();

    var letterPos = positions.letter;
    letterPos = letterPos[Math.floor(Math.random() * letterPos.length)];
    activeLetterPos = letterPos;

    if(gridSize == setGridSize && firstGridLoad){
        return false;
    }else{
        firstGridLoad = true;
        if(changeLetterInterval){
            clearInterval(changeLetterInterval);
        }
    }

    gridSize = setGridSize;

    for(var x=0; x<contentItems.length; x++){
        if(contentItems[x].parentNode != contentContainer){
            contentContainer.appendChild(contentItems[x]);
        }
    }

    grid.innerHTML = '';

    for(var i=0; i<rows; i++){
        var row = document.createElement('div');
            row.classList.add('row','r'+(i+1),'clearfix');

        for(var x=0; x<cells; x++){
            var cell = document.createElement('div');
                cell.classList.add('cell','c'+(x+1));
            row.appendChild(cell);
        }

        grid.appendChild(row);
    }

    for(var y=0; y<contentItems.length; y++){
        var cName = contentItems[y].classList;
        var settings = null;

        if(cName.contains('logo')){settings = positions.logo;}
        if(cName.contains('project-slider')){settings = positions.slider;}
        if(cName.contains('project-paging')){settings = positions.paging;}
        if(cName.contains('project-categories')){settings = positions.categories;}
        if(cName.contains('contact')){settings = positions.contact;}

        if(cName.contains('letter-c')){settings = letterPos.c;}
        if(cName.contains('letter-o1')){settings = letterPos.o1;}
        if(cName.contains('letter-m')){settings = letterPos.m;}
        if(cName.contains('letter-i')){settings = letterPos.i;}
        if(cName.contains('letter-n1')){settings = letterPos.n1;}
        if(cName.contains('letter-g')){settings = letterPos.g;}
        if(cName.contains('letter-s')){settings = letterPos.s;}
        if(cName.contains('letter-o2')){settings = letterPos.o2;}
        if(cName.contains('letter-o3')){settings = letterPos.o3;}
        if(cName.contains('letter-n2')){settings = letterPos.n2;}

        if(settings && settings.row != 0){
            var elem = $('.row.r'+settings.row+' .cell.c'+settings.cell);
            if(elem){elem.appendChild(contentItems[y]);}
        }
    }

    changeLetterInterval = setInterval(changeLetterLayout, 6500);
    for(var z=0; z<lettersItems.length; z++){
        setTimeout(letterToggle,200*z,lettersItems[z],0);
    }
}

function initProjectSlider(){
    if(typeof projectSlider === 'undefined' || projectSlider === null){
        window.projectSlider = null;
        window.projectBgSlider = null;
        window.projectSliderElem = $('.project-slider');
        window.projectBgSliderElem = $('.project-bg');
        window.projectSliderItems = $('.project-item');
        window.projectCategories = $('.project-categories');
        window.projectPagingButtons = $('.project-paging button');
        window.projectBgItems = $('.project-bg .item');
    }else{
        return false;
    }

    projectSlider = new Flickity(projectSliderElem,{
        setGallerySize: false,
        adaptiveHeight: false,
        cellSelector: '.project-item',
        cellAlign: 'center',
        wrapAround: true,
        percentPosition: true,
        autoPlay: 6000,
        prevNextButtons: false,
        pageDots: false,
        rightToLeft: true,
    }).on('cellSelect', function(){
        setProjectCategories(this.selectedIndex);
        setProjectPaging(this.selectedIndex);
    });

    projectBgSlider = new Flickity(projectBgSliderElem,{
        setGallerySize: false,
        adaptiveHeight: false,
        cellSelector: '.item',
        cellAlign: 'center',
        wrapAround: true,
        percentPosition: true,
        autoPlay: false,
        prevNextButtons: false,
        pageDots: false,
        asNavFor: projectSliderElem
    }).on('cellSelect', function(){
        if(projectSlider && projectSlider.selectedIndex != this.selectedIndex){
            projectSlider.select(this.selectedIndex);
        }
    });

    setProjectCategories(0);
    setProjectPaging(0);
}

function setProjectCategories(idx){
    if(idx === 'undefined' || idx === null){return false;}

    var item = projectSliderItems[idx],
        categories = item.getAttribute('data-categories').split(',');

    projectCategories.innerHTML = '';
    for(var i=0; i<categories.length; i++){
        var item = document.createElement('li');
            item.classList.add('.item');
            item.textContent = categories[i];
        projectCategories.appendChild(item);
    }
}

function setProjectPaging(idx){
    if(typeof projectPagingInit === 'undefined' || projectPagingInit === null){
        window.projectPagingInit = true;
        for(var i=0; i<projectPagingButtons.length; i++){
            projectPagingButtons[i].addEventListener('click',function(e){
                e.preventDefault();
                    projectSlider.select(parseInt(this.textContent)-1);
                    this.classList.add('active');
                return false;
            });
        }
    }

    for(var i=0; i<projectPagingButtons.length; i++){
        projectPagingButtons[i].classList.remove('active');
    }

    projectPagingButtons[idx].classList.add('active');
}

(function init(){
    window.pWidth = document.documentElement.clientWidth;
    window.grid = $('.grid');
    window.gridSize = 1920;
    window.contentContainer = $('.content');
    window.contentItems = $('.content-item');
    window.lettersItems = $('.letter');
    window.firstGridLoad = null;
    window.positions = null;
    window.activeLetterPos = null;
    window.changeLetterInterval = null;

    window.addEventListener('resize',function(e){
        pWidth = document.documentElement.clientWidth;
        resize();
    });
    resize();

    initProjectSlider();
})();
