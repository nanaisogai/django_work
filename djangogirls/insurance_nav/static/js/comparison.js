const modal = document.querySelector(".p-comparison__narrowdown");
$(".p-comparison__narrow-open").click(function () {
  $(".p-comparison__narrowdown").toggleClass("is-active");
  $(".p-comparison__overlay").toggleClass("is-active");
});

$(".js-narrowdown-close").click(function () {
  $(".p-comparison__narrowdown").removeClass("is-active");
  $(".p-comparison__overlay").removeClass("is-active");
});

function OnButtonClick() {
  $(".p-comparison__narrow-open").addClass("is-active");
  $(".p-comparison__narrow-active").addClass("is-active");
  $(".p-comparison__narrowdown").removeClass("is-active");
  $(".p-comparison__overlay").removeClass("is-active");
}

function toggleText(button) {
  var section = button.closest(".p-comparison__section");
  var text = section.querySelector(".p-comparison__hidden-text");
  var buttontext = section.querySelector(".p-comparison__readmore-text");
  var buttonimg = section.querySelector(".p-comparison__readmore-img");
  if (text.style.display === "none" || text.style.display === "") {
    text.style.display = "block";
    buttontext.textContent = "閉じる";
    buttonimg.classList.add("is-active");
  } else {
    text.style.display = "none";
    buttontext.textContent = "続きを読む";
    buttonimg.classList.remove("is-active");
  }
}

const checkboxes = document.querySelectorAll(".p-comparison__rank-checkbox");
const buttons = document.querySelectorAll(".p-comparison__rank-button-grean");
const text = document.querySelectorAll(".p-comparison__rank-checkbox-text");

// 各チェックボックスにイベントリスナーを設定
checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      // チェックが入った場合
      buttons[index].classList.add("is-checked");
      text[index].innerHTML = "検討リスト<br>追加済み"; // テキストを変更
    } else {
      // チェックが外れた場合
      buttons[index].classList.remove("is-checked");
      text[index].innerHTML = "検討リスト"; // 初期のテキストに戻す
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const fixedCell = document.querySelector(".p-comparison__rank-table-fixed");
  const otherTable = document.querySelector(".p-comparison__rank");

  fixedCell.addEventListener("touchstart", function () {
    // タップ時にスクロールを無効に
    otherTable.classList.add("is-hidden");
  });

  fixedCell.addEventListener("touchend", function () {
    // タップが終了したらスクロールを元に戻す
    otherTable.classList.remove("is-hidden");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // チェックボックス要素を取得
  const checkboxes = document.querySelectorAll(
    ".p-comparison__narrow-checkbox"
  );
  const clearButton = document.querySelector(".p-comparison__clear-button");
  const narrowButton = document.querySelector(".p-comparison__narrow-button");

  // チェックボックスの変更を監視
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", updateClearButtonState);
  });

  // 初期状態でボタンの状態を更新
  updateClearButtonState();

  function updateClearButtonState() {
    // 一つでもチェックが入っているかどうかを確認
    const isAnyCheckboxChecked = Array.from(checkboxes).some(
      (checkbox) => checkbox.checked
    );

    // ボタンの disabled プロパティを設定
    clearButton.disabled = !isAnyCheckboxChecked;
    narrowButton.disabled = !isAnyCheckboxChecked;
  }
});
