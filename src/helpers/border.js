const border = () => {

    document.getElementById("list").classList.add("selected-list")
  const list = () => {
    document.getElementById("list").classList.remove("selected-list");
  };

  setTimeout(list, 10000)
};

export default border;
