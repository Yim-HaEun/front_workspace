const images=[

];
const imagesPerpage=6;//한 페이지에 표시될 이미지 수
let currentPage=0;//현재 페이지를 나타내는 변수, 초기값은 0으로 설정
const imageContainer = document.querySelector('.img-container');
const prevButton = document.getElementById('prevPage');//이전 버튼
const nextButton = document.getElementById('nextPage');//다음 버튼

function displayImg(page){
    const startIndex = page*imagesPerpage;
    const endIndex = startIndex + imagesPerpage;
    imageContainer.innerHTML='';
    pageImages.forEach(image=>{
        const imgElement = document.createElement('img');
        imgElement.src = images;
        imgElement.classList.add('image');
        imageContainer.appendChild(imgElement);
    });
}
//버튼 업데이트
function updateButtons(){
    prevButton.disabled = currentPage===0;
    nextButton.disabled=(currentPage+1)*imagesPerpage>=images.length;
}
prevButton.addEventListener('click',()=>{
    if(currentPage>0){
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