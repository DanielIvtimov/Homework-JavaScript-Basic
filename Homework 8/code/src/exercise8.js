function storyTeller(){
    let whoValue = document.getElementById("who").value;
    let whatValue = document.getElementById("what").value;
    let whenValue = document.getElementById("when").value;

    let story = `${whoValue} ${whatValue} ${whenValue}`;
    
    document.getElementById("story").textContent = "Example: " + story;
}