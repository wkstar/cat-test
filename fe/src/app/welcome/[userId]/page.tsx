import styles from "./page.module.css";

const BE_URL_BASE = "http://localhost:3000/comms/your-next-delivery/";

async function getComms(userId: string) {
  const url = `${BE_URL_BASE}${userId}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const imageUrl =
  "https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg";

interface IUser {
  params: { userId: string };
}

export default async function Welcome({ params: { userId } }: IUser) {
  const comms = await getComms(userId);

  const totalPriceFormatter = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
  });
  const totalPriceFormatted = totalPriceFormatter.format(comms.totalPrice);

  return (
    <main className={styles.main}>
      <img className={styles.catImage} src={imageUrl} alt="cute.jpg" />
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{comms.title}</h1>
        <p className={styles.message}>{comms.message}</p>
        <p className={styles.totalPrice}>Total price: {totalPriceFormatted}</p>
        <div className={styles.buttonContainer}>
          <button className={styles.buttonPrimary}>See Details</button>
          <button className={styles.buttonSecondary}>Edit Delivery</button>
        </div>
      </div>
      {comms.freeGift && <div className={styles.freeGift}>Free Gift</div>}
    </main>
  );
}
