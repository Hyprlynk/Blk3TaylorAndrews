 var totalDonationsNode = document.getElementById("totalDonations")
    var totalMoney = 0;

    function addMoney() {
      totalMoney = parseInt(document.getElementById("donationAmount").value, 10) + totalMoney;
      totalDonationsNode.textContent = totalMoney;
    }

    document.getElementById("donateButton").addEventListener("click", addMoney);
