
//utility
const experienceClick = (e) => {
    const ele = window.document.getElementsByClassName('titleContainer');
    ele[0].className += ' hideEle';
    const ex1 = window.document.getElementsByClassName('ex1');
    ex1[0].className += ' showEx1';
    const ex2 = window.document.getElementsByClassName('ex2');
    ex2[0].className += ' showEx1';
    const ex3 = window.document.getElementsByClassName('ex3');
    ex3[0].className += ' showEx1';
    const expTitle = window.document.getElementsByClassName('title');
    expTitle[0].className = 'expTitle';
}

const projectClick = () => {
    const ele = window.document.getElementsByClassName('titleContainer2');
    ele[0].className += ' hideEle';
    const pr1 = window.document.getElementsByClassName('pr1');
    pr1[0].className += ' showPr';
    const pr2 = window.document.getElementsByClassName('pr2');
    pr2[0].className += ' showPr';
    const pr3 = window.document.getElementsByClassName('pr3');
    pr3[0].className += ' showPr';
    console.log(pr3[0])
    const prTitle = window.document.getElementsByClassName('titleProject');
    prTitle[0].className = 'expTitle';
}

const goContacts = () => {
    const ele = window.document.getElementsByClassName('animDiv');
    ele[0].className += ' activeAnimDiv';
    setTimeout(() => {
        window.location.href = '/contact.html';
    }, 600)

}
const goResume = () => {
    const ele = window.document.getElementsByClassName('animDiv');
    ele[0].className += ' activeAnimDiv';
    setTimeout(() => {
        window.location.href = '/resume.html';
    }, 600)
}
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }