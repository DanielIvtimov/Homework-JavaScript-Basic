console.log("=== Parameter ===");
function differentTypes(parameter){
    let type = typeof(parameter);
    console.log(type);
}
differentTypes(["Daniel"]);
differentTypes("Ivtimov");
differentTypes(2003);
differentTypes();
differentTypes(true);
