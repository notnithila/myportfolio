function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}   

function openPop(button) {
    // Find the parent details-container of the clicked button
    const container = button.closest('.details-container');
    
    // Find the popupDialog within this container
    const popup = container.querySelector('.popupDialog');
    
    if (popup) {
      const isVisible = popup.style.visibility === 'visible';
      popup.style.visibility = isVisible ? 'hidden' : 'visible';
    }
  }



