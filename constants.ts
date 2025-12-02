import { Team, Player, Match, Referee, Championship } from './types';

// Images from the prompt
export const IMAGES = {
  user: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGq9NzIQqt9xi6c4VvuqpUUJhoIFeg1806g7iQ57l9XOKbApDe8aXOd692bfGSRkozBf3S7pGRWOv1mokD-kaifuMWsyRlCvSe355gmbc_6w6cblqvcaJq1-_lfw79tmHb0pFmlwTZ62PxzPTa2qQemdMLAj3IEMMt5J3IiL1it3G7qe5Z4pMYSFdTMwD2f3yEOJO1LvzuHALgIALawwAF3YlwAfe2e_i2yQu1r4_-oBad1x7iIA7XHxZ81jhYdu1KT-tZRyWZhv5j",
  champ1: "https://lh3.googleusercontent.com/aida-public/AB6AXuCA9X70Eok1xk___e1DTnVRBCTuWwgVZ0JNs382pMPCdsIpRq16nZth4Y_x-64jGdh1kMtrjnfa9DBKMNleyrBtwbhjuIhj7mp9ux_PjbyqnRn2GjbFxpJ-Gc3WtU9KXEjiT4XmLNufhUeMl2pYrMX1TeO-wxoxQ3TZNfxy_UM5iRp2XrZLIqzV3McUaX3smYs9lH7eU-FxZA8jWNMFfA0HuHVnmX2UwztO8LV6uZwIsMeTep9gND32Idaufw_BrB52Ri5MD6ujTwja",
  champ2: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3hd3W6ZTjKOKTy5_-LmkupGPvp8Bfa1OMy8xIMKCYKPuUkkdthAU2hKZvme68rVa6cgasqlGiPRdbikivKjMvUeMvwVP1fiWgl6LQz4U_qsgvfnzjueNXybVfdES31fZA-iC_0xuK4mYFVcaznyw3YisudukirRUYE7RUeCpYbL5f-gemJ73YH8dtUoYj2QxcaTE1if_ft-J51ZxX15N15vNGk5676nqOc0o1x-ToVnd9kocmglTFIfrQlmQnGQV5TFwnRIXj85N2",
  champ3: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6DKG_iSgGhTJFvnhT77rKVZwDN_vBxDa9KXNOXuSvbYRihdlfG9bMda8dFC9lsvKCjO2Xi15lVN5wuzq2B1yWzShjUIinF_e5XWFaNxdzyOM-wkr_8P_H66pS3HymxcorwDpdwzKwqCYPBsbPwKzTl8yQTlXhgW-51VK4upaadn4o0YQfZLos_b8AGhpbgObfGHbNcjYAtkoISc-yHAMN1tsCDDmO3By2Ji15Dj9mcX7nHZkI0jBlWQB56hU3IMbidOcQXcHyBlYp",
  teamReal: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3-V8DV-2sJsmNHSN3UwotIQ2_v_t30LWboEAiDENrdYqOYGAduqb3Z4M3d6OCbCGnUIvum5RJexgQrmW99ssmqqj66K4tgyuFO_BmXS11bGpfg8LGOE-ZPwgFBmAXcFPSozeaZwkcGGCVQjViurlf2iybteuRV4_nqgwZoKRZlahkWg4F-pNSv6f-FTv6mQG-jre8O7vDRZnxW7Kld77yd88mxlO-8j7VsMdwWlTEuA6-oLl_MPmJOhDYRntCLa4Zbujp9cq5pZTW",
  teamBarca: "https://lh3.googleusercontent.com/aida-public/AB6AXuA15NHmm1_VpZGIMHWwOBD_oORlScwWoaeJXoif7TGCnCEx1Ye6f684p2SKRsElxIMWUHHTuUNejmpaJP_VgQFVL88sY9wnIEPGVi9-sWtjVEBv9U14p4n8-_xEvNNuEPH0g3d31cMkAomrT555fi_v1S8-eb06_dmhLihiEQYOqsshudjNGWujmkvx8wRzBUgW0EkNd-qMoCoh9XxiJtIPedp-WhSluS1hsuijxNeMeAL7magF2KzqWDSDBjfbLW1qRLJnKYe7sX11",
  teamGirona: "https://lh3.googleusercontent.com/aida-public/AB6AXuADwYNfMWC7SuHzVWwTbyafI8WTVRmbaQ8tA7OEL5vYDvECwuUOnMkIUJsRYRtsUD4aEsB8Zrfjm-lGYDL2Af4RPs22D7V3RoO9ARwslo2VaXjP9iF-j5K0pMJWDna-4HD2Sy0LuGt1YzN9Djorg6Rg7xI2q2-hpOcZXbHH_CgPuR-bZGOSd9y4vay8VscehzJvNAcn-3jbklqEiPZsvFpF0MmFkFcXxNu61mq2t1MxQXEluIm4mckv9VgJWUnYvoozGqOcX-De8z9G",
  teamAtletico: "https://lh3.googleusercontent.com/aida-public/AB6AXuDk9seWQgPRz7gshiSlwkRHOJmKDtMBnGh5CqRvleTqv1_QtonVL-BNDzLCST07vxmwpYwG6j7Lbc-1wKxS2pf2LJB3QM_Q473v_DcSANCZmndOkMj8y5mgHz2O2tk_WulUe3IWyV8_JAV-_CfzuCxIcvfCHljsfUACc2e7GOWPq-dExx86faU0k3SIQ0gU3gxSb1KJ0je8VZlEQR4NZTcGKtE2L-K-2OPRxzx7EZK9BDVKxZEY3wvV3o8d5b0z-BS6qlgAilSQw5Jp",
  playerMessi: "https://lh3.googleusercontent.com/aida-public/AB6AXuA40s4Tp6QSQ3kHgKOoU4H_9ZRFMjBtYAhWvyr-pUjWBsQj61siSgqxgVVE1i67KiCo8AfowP5-I2_Nkddo0nE5BJiaRS3FEwX2m40OFC6t5O87BFlQ3x2iAwVnxzlCrl-XXiR6NT3I24WRyuHHy8TYzbMVSRuOANbAjPthO_1W0fE0mrzVh7eaNr2jgtAkBxubQZpp0OuK4MLEsbo9Rl4QTp9JDzp4Day9CahqWa5BKtKn8nZl1QP1Vq2lMLGv3FQ9ucsHcvlBKgKj",
  playerRonaldo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAc02Zo5gn9dDD_OR4FldrEYfMM-4qEFLqShx22K2PsCG7AmOZiSGHQNwUYsr-zcYMxotHjIIg2Zb7WzroS5jj-Ju1LPr2FFZK9dMOp9k-NiYP5B1bXThnkIlPCoo_guXfetdx2eG9jnG-4f_PdT9FvNzpIWIj-3WZgYepctbnhNmhx4Y4VXwGHuERDgikEsuJ84nVFvsUNNsOvwESzC0b7yvHW4i0dZoVdA02gqV98aYy0PUKY4Q_G-HCX-7XTVP3pl_0aWH4y0hUZ",
  playerNeymar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2jr4suxL4sE5ee-5HY53tLgRhQf57HlqEFxYua6fgcUUZWPOmup48G34KTJyfZjojkcY7Xoey7-EOnZ2BqR8bUVPXl2B0V7P050IX7cyksKxuIjc_AJKmV6p-M7myNuT_sKvUCE_7F7lY-PUtsBH3CKRUhEO9yToydB1UXBG-A4LkPrLE0lalapOTdU8-3uN4TWdg9YE0X5oHi5gcLuSEl0LPyN4TfQhR47TDu6RAN13UVMWlqLJIc-AFS33zGy5zBl4GjgZgKFGr",
  playerMbappe: "https://lh3.googleusercontent.com/aida-public/AB6AXuBh6P-PYv54-SGPXy39uPzoqGfmODhlRH9EXOKjuTvYljDiY_90n2QAarPa24Kys0KfniuRFL9F97nI0GtbEMG5SLSnksS1gza9zeCswP1js-28MZfXJr74MsCQIRy3JqRuY2AoS7W9WckSg-wB5b72CPHi4ySp-4xm95AHps6_aabGWK87is_F8gTUV3kifJLVSOgCKZYW5csrGfrUAUOzYPsLdkNEMjaa4A3VHKVFDrojfNkLMTfZGQewCnUzJzPHgwSbBcXH9JJr",
};

export const TEAMS: Team[] = [
  { id: '1', name: 'Real Spartans', logo: IMAGES.teamReal, series: 'A', stats: { pts: 95, pj: 38, pg: 29, pe: 8, pp: 1 } },
  { id: '2', name: 'FC Barcelona', logo: IMAGES.teamBarca, series: 'A', stats: { pts: 85, pj: 38, pg: 26, pe: 7, pp: 5 } },
  { id: '3', name: 'Girona FC', logo: IMAGES.teamGirona, series: 'A', stats: { pts: 81, pj: 38, pg: 25, pe: 6, pp: 7 } },
  { id: '4', name: 'Atlético Madrid', logo: IMAGES.teamAtletico, series: 'A', stats: { pts: 76, pj: 38, pg: 24, pe: 4, pp: 10 } },
  { id: '5', name: 'Urban Eagles', logo: IMAGES.teamBarca, series: 'B', stats: { pts: 60, pj: 30, pg: 18, pe: 6, pp: 6 } },
];

export const MATCHES: Match[] = [
  { id: '101', date: 'Sábado, 25 de Mayo', time: '18:00', homeTeamId: '1', awayTeamId: '5', location: 'Estadio Municipal', status: 'Pendiente' },
  { id: '102', date: 'Domingo, 26 de Mayo', time: '20:00', homeTeamId: '3', awayTeamId: '4', location: 'Campo Deportivo Sur', status: 'Pendiente' },
  { id: '103', date: 'Sábado, 1 de Junio', time: '16:30', homeTeamId: '2', awayTeamId: '1', location: 'Estadio Metropolitano', status: 'Pendiente' },
];

export const PLAYERS: Player[] = [
  { id: 'p1', name: 'Lionel Messi', team: 'Real Spartans', avatar: IMAGES.playerMessi, stats: { goals: 15, assists: 10, yellowCards: 1, redCards: 0 } },
  { id: 'p2', name: 'Cristiano Ronaldo', team: 'Urban Eagles', avatar: IMAGES.playerRonaldo, stats: { goals: 12, assists: 5, yellowCards: 3, redCards: 1 } },
  { id: 'p3', name: 'Neymar Jr.', team: 'FC Barcelona', avatar: IMAGES.playerNeymar, stats: { goals: 10, assists: 12, yellowCards: 2, redCards: 0 } },
  { id: 'p4', name: 'Kylian Mbappé', team: 'Atlético Madrid', avatar: IMAGES.playerMbappe, stats: { goals: 8, assists: 8, yellowCards: 0, redCards: 0 } },
];

export const REFEREES: Referee[] = [
  { id: 'r1', name: 'Alejandro Hernandez', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBCp8FX9Fr2YC-V8BNQHxexWC0yrE1PCe93I4RjpmH-i1iJlMgHDMTy0_fdlU9BEUDowUhfUzkin1SMcT74kufs_UydWHNm2S-E8c1ibD5jfKCop7PlaDO86_7jsMLWKnZgMvryDR-dCeMzg6i_367SHDHqyoz0k29kkDKPiInUGzPYkgTBpQpi8uBYA1-8jzJzbmJrlfgqCDRuSby2kSzODS12wXdIYwjJQrU_Bp1TcD-KHmscKJ5iUvFToGECZvHSkY_Q8TnAANd', matchesAssigned: 5 },
  { id: 'r2', name: 'Isidro Diaz de Mera', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuG3ZTszv10zJreOyh6WU9s-PO2BKa4kp2avK7znYAIEXHMe2b_NdbwfVDuwIa0lPjVxhniBGiZ4rH3h2xiZKbxznbgVstDeXqKHJPNG9YfwHTbIp4FQ4vEhZ2IN647hDeJuVFQ_azzLiJGB4-wtgcVV0taTQxTetz2VgUKQyAKdYG2K2w0zIHSHtwo_etqJHPy_xOc4xjJ2FjSQO9GX8fiJmheMUBLAe0qMfIIuuAI5rsTLFzo9meaCRSpLLNWNG5fjZzORoYvM0I', matchesAssigned: 8 },
  { id: 'r3', name: 'Ricardo de Burgos', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClD4THladjNPcb6DA_i-Tb98ngM_MmBIk5X3v7Lz_J-5Di6GCMqI6Dl6iNQF2XAAu3QB95fYSqCCK65qNfh1m_Gggd0zSz_OsP439XypmbFQOisCJjHbs8Rr_7dPQW0i5xs2EL2Uot21QQx2CgLXxDN8H6-CuXMP7avd3pE16JbMGPpdQJewv7o1f49AAqbFo3RjnsLrqrDPS_taAymJtqJIMqqUXkYQZbWrROkFPDI1TyuY-GmeAFMtpJkH9zTG0UzewO6CPiltyz', matchesAssigned: 3 },
  { id: 'r4', name: 'Javier Alberola', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCg1EJA_o92PMdf_xS5zMMQJnIz6aPUMtYNCLK3KQ6eog05N5iWNdug22c5vBcPXIivOmhkFXHNlh1Gs0K1_xRsnzHpKaGsEuQUlPKekRAOWEwf5wBit_fnUKBBiDgSogXC5pcp5Oiva_boopicV74cVsCNUXMtpPqYCqI9UohAHH8DhZ_CXqHTJuQXutUaGXRA6IgUKwmRyYowx5E-RYrHEPlrKjpTpjslZTnH7W0ZEpc5xTXLVvGfP6X77P66ujqvkA8EiuevmZM4', matchesAssigned: 12 },
  { id: 'r5', name: 'Marta Huerta', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDUiu9dFVRS0ElpQlCFmKjVSyznYzKy1J5SnJ5Kv2uqvLZAJ0E9Zu9w52V-9ajjsCq4hm5aiEeGgPAMk61yiVKt-whokIOYo_55uPoXQWrSy4cnRd0J9Erx8ccIYu7CAT8mRsTAjp5-6OEmT-MYeZdf__aCRuji553L2zBmS8CjR1W_yxTb31SVokTXdshwlwgTABiyYCN-QyU39-BZpYnr8a5fcJQimjSSjaJaZLcooPAFQxWeo4gSKZsdACHoXjADT76gK7fxTBk', matchesAssigned: 7 },
];

export const CHAMPIONSHIPS: Championship[] = [
  { id: 'c1', name: 'Liga Anual de Verano', banner: IMAGES.champ1, position: '3º de 12' },
  { id: 'c2', name: 'Copa de la Ciudad', banner: IMAGES.champ2, position: '1º de 8' },
  { id: 'c3', name: 'Torneo Relámpago', banner: IMAGES.champ3, position: '5º de 16' },
];