import { Link } from "react-router-dom";
import IconSignup from "../static/signup.PNG";
import IconLogin from "../static/login.PNG";
import IconProfil from "../static/profil.PNG";
import IconLogout from "../static/logout.PNG";
import IconLicenseAdd from "../static/license-add.PNG";
import IconLicenseForm from "../static/license-form.PNG";
import IconLicenseSuccess from "../static/license-success.PNG";
import IconCarAdd from "../static/car-add.PNG";
import IconCarForm from "../static/car-form.PNG";
import IconCarSuccess from "../static/car-success.PNG";
import IconStrahAdd from "../static/strah-add.PNG";
import IconStrahForm from "../static/strah-form.PNG";
import IconStrafAdd from "../static/straf-add.PNG";
import IconStrafForm from "../static/straf-form.PNG";
import IconDTPAdd from "../static/dtp-add.PNG";
import IconDTPForm from "../static/dtp-form.PNG";
import IconStrafOplata from "../static/straf-f.PNG";
import IconStrafOplatil from "../static/straf-t.PNG";
import IconStatus from "../static/status.PNG";
import IconLicenseConfirm from "../static/license-confirm.PNG";
import IconCarConfirm from "../static/car-confirm.PNG";

const Help = () => (
  <div className="help">
    <h1 style={{ textAlign: "center" }}>Помощь</h1>
    <br />
    <h1 style={{ textAlign: "center" }}>Меню помощи</h1>

    <div style={{ display: "flex" }}>
      <ol>
        <a href="/help#user">Юзер</a>
        <li>
          <a href="/help#reg">Регистрация</a>
        </li>
        <li>
          <a href="/help#auth">Авторизация</a>
        </li>
        <li>
          <a href="/help#logout">Выход из аккаунта</a>
        </li>
        <li>
          <a href="/help#add-license">Добавление водительского удостоверения</a>
        </li>
        <li>
          <a href="/help#cont-license">Продление водительского удостворения</a>
        </li>
        <li>
          <a href="/help#change-status">Переключение режима проверки заявок</a>
        </li>
        <li>
          <a href="/help#add-car">Добавление транспортного средства(ТС)</a>
        </li>
        <li>
          <a href="/help#strah">Оформление страховки</a>
        </li>
        <li>
          <a href="/help#straf-pay">Оплата штрафа</a>
        </li>
      </ol>
      <ol>
        <a href="/help#dps">Работник ДПС</a>
        <li>
          <a href="/help#straf">Оформление штрафа</a>
        </li>
        <li>
          <a href="/help#dtp">Оформление ДТП</a>
        </li>
        <li>
          <a href="/help#confirm-license">
            Подтверждение водительского удостоверения
          </a>
        </li>
        <li>
          <a href="/help#confirm-car">Подтверждение Транспортного средства</a>
        </li>
      </ol>
    </div>

    <h1 style={{ textAlign: "center" }} id="user">
      Роль: Пользователь
    </h1>
    <br />

    <div className="1" id="reg">
      <h2 style={{ textAlign: "center" }}>Регистрация</h2>
      <ol>
        <li>
          Перейти на страницу &nbsp;<Link to="/signup">регистрации</Link>
        </li>
        <li>
          Заполнить форму регистрации <br />
          <img src={IconSignup} alt="signup" />
        </li>
        <li>Нажать кнопку зарегестрироваться</li>
        <br />В случае удачной регистрации вы будете перенаправлены на страницу
        авторизации
      </ol>
    </div>

    <div className="2" id="auth">
      <h2 style={{ textAlign: "center" }}>Авторизация</h2>
      <ol>
        <li>
          Перейти на страницу &nbsp;<Link to="/login">авторизации</Link>
        </li>
        <li>
          Заполнить форму авторизации данными, которые вы вводили при
          регистрации <br />
          <img src={IconLogin} alt="login" />
        </li>
        <li>Нажать кнопку авторизоваться</li>
        <br />В случае удачной авторизации вы будете перенаправлены на страницу
        профиля.Там вы увидите свои данные, штрафы, историю сообщений от ДПС, и
        т.д.
        <br />
        <br />
        <img src={IconProfil} alt="profil" />
      </ol>
    </div>

    <div className="3" id="logout">
      <h2 style={{ textAlign: "center" }}>Выход из аккаунта</h2>
      <div style={{ textAlign: "center" }}>
        Вы можете выйти из своего аккаунта, что-бы войти в другой.
        <br />
        Для этого вы должны быть авторизованным, и находится на странице &nbsp;
        <Link to="/profil">профиля</Link>
      </div>
      <ol>
        <li>
          Вам необходимо нажать кнопку "Выйти" <br />
          <img src={IconLogout} alt="logout" />
        </li>
        <br />
        Далее вы будете перенаправлены на страницу авторизации
      </ol>
    </div>

    <div className="4" id="add-license">
      <h2 style={{ textAlign: "center" }}>
        Добавление водительского удостоверения
      </h2>
      <div style={{ textAlign: "center" }}>
        Для этого вы должны быть авторизованным, и находится на странице &nbsp;
        <Link to="/profil">профиля</Link>
      </div>
      <ol>
        <li>
          Вам необходимо нажать кнопку "Добавить водительское удостоверение",
          которая находится под блоком информации о водителе
          <br />
          <img src={IconLicenseAdd} alt="license add" />
        </li>
        <li>
          Затем вам необходимо заполнить форму <br />
          <img src={IconLicenseForm} alt="license form" />
        </li>
        <li>
          Далее необходимо нажать кнопку "добавить", вы будете перенаправлкены
          на страницу профиля
        </li>
        <br />
        В случае удачной проверки, у вас в профиле отобразится ваше водительское
        удостоверение.В пративном случае будет сообщение об ошибке <br />
        <img src={IconLicenseSuccess} alt="license success" />
      </ol>
    </div>

    <div className="5" id="cont-license">
      <h2 style={{ textAlign: "center" }}>
        Продление водительского удостворения
      </h2>
      <div style={{ textAlign: "center" }}>
        Для этого вы должны быть авторизованным, и находится на странице &nbsp;
        <Link to="/profil">профиля</Link> <br />
        Так же вы должны уже имет водительское удостоверение
      </div>
      <ol>
        <li>
          Вам необходимо нажать кнопку "Продлить водительское удостоверение"{" "}
          <br />
          <img src={IconLicenseSuccess} alt="license success" />
        </li>
        <br />В случае удачи, у вас обновится срок водительского удостоверения
      </ol>
    </div>

    <div className="5" id="change-status">
      <h2 style={{ textAlign: "center" }}>
        Переключение режима проверки заявок
      </h2>
      <div style={{ textAlign: "center" }}>
        Для этого вы должны быть авторизованным, и находится на странице &nbsp;
        <Link to="/profil">профиля</Link> <br />
        Данная функция изменяет режим проверки заявок, всего их 2: <br />
        Автоматический - заявки проверяются сразу системой(обработка происходит
        сразу) <br />
        Ручной - заявки отправляются на проверку работнику ДПС(необходимо время
        на обработку работником ДПС)
      </div>
      <ol>
        <li>
          Для переключения режима вам необходимо нажать кнопку "переключить"
          рядом со статусом проверки заявок
          <br />
          <img src={IconStatus} alt="change status" />
        </li>
        <br />В случае удачи, у вас обновится статусом проверки заявок
      </ol>
    </div>

    <div className="6" id="add-car">
      <h2 style={{ textAlign: "center" }}>
        Добавление транспортного средства(ТС)
      </h2>
      <div style={{ textAlign: "center" }}>
        Для этого вы должны быть авторизованным, и находится на странице &nbsp;
        <Link to="/profil">профиля</Link> <br />
        Так же вы должны иметь водительское удостоверение
      </div>
      <ol>
        <li>
          Вам необходимо нажать кнопку "Добавить автомобиль", которая находится
          в блоке автомобили
          <br />
          <img src={IconCarAdd} alt="car add" />
        </li>
        <li>
          Затем вам необходимо заполнить форму <br />
          <img src={IconCarForm} alt="car form" />
        </li>
        <li>
          Далее необходимо нажать кнопку "добавить", вы будете перенаправлкены
          на страницу профиля
        </li>
        <br />
        Далее у вас в профиле отобразится новая машина. <br />
        <img src={IconCarSuccess} alt="car success" />
      </ol>
    </div>

    <div className="7" id="strah">
      <h2 style={{ textAlign: "center" }}>Оформление страховки</h2>
      <div style={{ textAlign: "center" }}>
        Для этого вы должны быть авторизованным, и находится на странице &nbsp;
        <Link to="/profil">профиля</Link> <br />
        Так же вы должны иметь водительское удостоверение, и минимум 1
        автомобиль
      </div>
      <ol>
        <li>
          Вам необходимо нажать кнопку "Оформить страховку", которая находится в
          блоке автомобили
          <br />
          <img src={IconStrahAdd} alt="strah add" />
        </li>
        <li>
          Затем вам необходимо заполнить поле "id автомобиля", и нажать кнопку
          "расчитать", далее автоматически заполнится поле "сумма страховки",
          если вас устраивает данный страховой взнос, то переходите к следующему
          шагу <br />
          <img src={IconStrahForm} alt="strah form" />
        </li>
        <li>Нажмите кнопку "Оформить"</li>
        <br />
        Далее у вас в профиле обновится страховой взнос.
      </ol>
    </div>

    <div className="5" id="straf-pay">
      <h2 style={{ textAlign: "center" }}>Оплата штрафа</h2>
      <div style={{ textAlign: "center" }}>
        Для этого вы должны быть авторизованным, и находится на странице &nbsp;
        <Link to="/profil">профиля</Link> <br />
      </div>
      <ol>
        <li>
          Вам необходимо нажать кнопку "Оплатить" под штрафом, который вы хотите
          оплатить.Штрафы находятся в блоке штрафы
          <br />
          <img src={IconStrafOplata} alt="straf success" />
        </li>
        <br />В случае удачи, штраф будет иметь статус "оплачен"
        <br />
        <img src={IconStrafOplatil} alt="license success" />
      </ol>
    </div>

    <br />

    <h1 style={{ textAlign: "center" }} id="dps">
      Роль: Работник ДПС
    </h1>
    <br />

    <div className="8" id="straf">
      <h2 style={{ textAlign: "center" }}>Оформление штрафа</h2>
      <div style={{ textAlign: "center" }}>
        Для этого вы должны быть авторизованным, и находится на странице &nbsp;
        <Link to="/profil">профиля</Link> <br />
        Так же вы должны быть работником ДПС
      </div>
      <ol>
        <li>
          Вам необходимо нажать кнопку "Создать штраф", которая находится в
          блоке "история штрафов"
          <br />
          <img src={IconStrafAdd} alt="straf add" />
        </li>
        <li>
          Затем вам необходимо заполнить форму <br />
          <img src={IconStrafForm} alt="straf form" />
        </li>
        <li>
          Далее необходимо нажать кнопку "оштрафовать", затем вы будете
          перенаправлкены на страницу профиля, а у водителя появится штраф
        </li>
      </ol>
    </div>

    <div className="9" id="dtp">
      <h2 style={{ textAlign: "center" }}>Оформление ДТП</h2>
      <div style={{ textAlign: "center" }}>
        Для этого вы должны быть авторизованным, и находится на странице &nbsp;
        <Link to="/profil">профиля</Link> <br />
        Так же вы должны быть работником ДПС
      </div>
      <ol>
        <li>
          Вам необходимо нажать кнопку "Создать ДТП", которая находится в блоке
          "история ДТП"
          <br />
          <img src={IconDTPAdd} alt="dtp add" />
        </li>
        <li>
          Затем вам необходимо заполнить форму <br />
          <img src={IconDTPForm} alt="dtp form" />
        </li>
        <li>
          Далее необходимо нажать кнопку "оформить ДТП", затем вы будете
          перенаправлкены на страницу профиля, а у водителя дтп, и ему
          произайдёт выплата по страховке
        </li>
      </ol>
    </div>

    <div className="9" id="confirm-license">
      <h2 style={{ textAlign: "center" }}>
        Подтверждение водительского удостоверения
      </h2>
      <div style={{ textAlign: "center" }}>
        Для этого вы должны быть авторизованным, и находится на странице &nbsp;
        <Link to="/profil">профиля</Link> <br />
        Так же вы должны быть работником ДПС
      </div>
      <ol>
        <li>
          Вам необходимо проверить правильность данных водительского
          удостоверения
          <br />
          <img src={IconLicenseConfirm} alt="dtp add" />
        </li>
        <li>
          Затем вам необходимо нажать кнопку "принять" если данные верны.Или
          нажать кнопку "отклонить", если данные не верны
        </li>
        Затем заявка пропадёт
      </ol>
    </div>

    <div className="9" id="confirm-car">
      <h2 style={{ textAlign: "center" }}>
        Подтверждение Транспортного средства
      </h2>
      <div style={{ textAlign: "center" }}>
        Для этого вы должны быть авторизованным, и находится на странице &nbsp;
        <Link to="/profil">профиля</Link> <br />
        Так же вы должны быть работником ДПС
      </div>
      <ol>
        <li>
          Вам необходимо проверить правильность данных, которые ввёл
          пользователь
          <br />
          <img src={IconCarConfirm} alt="dtp add" />
        </li>
        <li>
          Затем вам необходимо нажать кнопку "принять" если данные верны.Или
          нажать кнопку "отклонить", если данные не верны
        </li>
        Затем заявка пропадёт
      </ol>
    </div>
  </div>
);

export default Help;
