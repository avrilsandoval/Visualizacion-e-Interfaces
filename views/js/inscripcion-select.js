document.addEventListener('DOMContentLoaded', function() {
    const select1 = document.getElementById('select-1');
    const select2 = document.getElementById('select-2');
  
  select1.addEventListener("change", function () {
    const selectedValue = this.value;
    let options = [];

    switch (selectedValue) {
      case "maniana":
        options = [
          {
            value: "Comisión 2055 - Lun y Jue: 8 a 12hs.",
            text: "Comisión 2055 - Lun y Jue: 8 a 12hs.",
          },
          {
            value: "Comisión 2056 - Mier y Vie: 8 a 12hs.",
            text: "Comisión 2056 - Mier y Vie: 8 a 12hs.",
          },
          {
            value: "Comisión 2057 - Mar y Sab: 8 a 12hs.",
            text: "Comisión 2057 - Mar y Sab: 8 a 12hs.",
          },
        ];
        break;
      case "tarde":
        options = [
          {
            value: "Comisión 3055 - Lun y Jue: 14 a 18hs.",
            text: "Comisión 3055 - Lun y Jue: 14 a 18hs.",
          },
          {
            value: "Comisión 3056 - Mier y Vie: 14 a 18hs.",
            text: "Comisión 3056 - Mier y Vie: 14 a 18hs.",
          },
          {
            value: "Comisión 3057 - Jue y Sab: 14 a 18hs.",
            text: "Comisión 3057 - Jue y Sab: 14 a 18hs.",
          },
        ];
        break;
      case "noche":
        options = [
          {
            value: "Comisión 4055 - Lun y Jue: 19 a 23hs.",
            text: "Comisión 4055 - Lun y Jue: 19 a 23hs.",
          },
          {
            value: "Comisión 4056 - Mier y Vie: 19 a 23hs.",
            text: "Comisión 4056 - Mier y Vie: 19 a 23hs.",
          },
          {
            value: "Comisión 4057 - Mar y Sab: 19 a 23hs.",
            text: "Comisión 4057 - Mar y Sab: 19 a 23hs.",
          },
        ];
        break;
      default:
        options = [];
    }

    select2.innerHTML = "";
    options.forEach(function (option) {
      const opt = document.createElement("option");
      opt.value = option.value;
      opt.text = option.text;
      select2.appendChild(opt);
    });
  });
});
