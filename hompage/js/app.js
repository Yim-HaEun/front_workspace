const images=[
    './img/hk (1).jpg',
    './img/hk (2).JPG',
    './img/hk (3).jpg',
    './img/hk (4).jpg',
    './img/hk (5).jpg',
    './img/hk (6).jpg',
    './img/hw (1).JPG',
    './img/hw (2).jpg',
    './img/hw (3).jpg',
    './img/hw (4).jpg',
    './img/hw (5).jpg',
    './img/hw (6).jpg',
    './img/tk (1).jpg',
    './img/tk (2).jpg',
    './img/tk (3).jpg',
    './img/tk (4).jpg',
    './img/tk (5).JPG',
    './img/tk (6).JPG',
    './img/sp (1).JPG',
    './img/sp (2).JPG',
    './img/sp (3).JPG',
    './img/sp (4).jpg',
    './img/sp (5).jpg',
    './img/sp (6).jpg',
    './img/wtk (1).JPG',
    './img/wtk (3).jpg',
    './img/wtk (4).jpg',
    './img/wtk (5).jpg',
    './img/wtk (6).jpg',
    './img/wtk (7).jpg'
];
const imagesPerpage= 2;//한 페이지에 표시될 이미지 수
let currentPage=0;//현재 페이지를 나타내는 변수, 초기값은 0으로 설정
const imageContainer = document.querySelector('.img-container');
const prevButton = document.getElementById('prevPage');//이전 버튼
const nextButton = document.getElementById('nextPage');//다음 버튼

function displayImg(page){
    const startIndex = page*imagesPerpage;

    const endIndex = startIndex + imagesPerpage;
    const pageImages = images.slice(startIndex,endIndex);
    imageContainer.innerHTML='';

    pageImages.forEach(images=>{
        const imgElement = document.createElement('img');
        imgElement.src = images;
        imgElement.classList.add('image');
        imageContainer.appendChild(imgElement);
    });
}

//버튼 업데이트
function updateButtons(){
    prevButton.disabled = currentPage===0;
    nextButton.disabled=(currentPage+1)*imagesPerpage >=images.length;
}//이전 버튼에대한 클릭이벤트
prevButton.addEventListener('click',()=>{
    if(currentPage > 0){
        currentPage--;
        displayImg(currentPage);
        updateButtons();
    }
});
nextButton.addEventListener('click',()=>{
    if((currentPage+1)*imagesPerpage<images.length){
        currentPage++;
        displayImg(currentPage);
        updateButtons();
    }
});
displayImg(currentPage);
updateButtons();