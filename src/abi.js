// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "avto",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id_car",
        type: "uint256",
      },
    ],
    name: "check_car",
    outputs: [
      {
        internalType: "address",
        name: "adr",
        type: "address",
      },
      {
        internalType: "string",
        name: "category",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "srok",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_drive_number",
        type: "string",
      },
    ],
    name: "check_drive",
    outputs: [
      {
        internalType: "address",
        name: "adr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "srok",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "category",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id_dtp",
        type: "uint256",
      },
    ],
    name: "check_dtp",
    outputs: [
      {
        internalType: "uint256",
        name: "summ",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id_input",
        type: "uint256",
      },
    ],
    name: "check_input_car",
    outputs: [
      {
        internalType: "address",
        name: "adr",
        type: "address",
      },
      {
        internalType: "string",
        name: "category",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id_input",
        type: "uint256",
      },
    ],
    name: "check_input_drive",
    outputs: [
      {
        internalType: "string",
        name: "drive_number",
        type: "string",
      },
      {
        internalType: "address",
        name: "adr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "srok",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "category",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "check_lens",
    outputs: [
      {
        internalType: "uint256",
        name: "len_car",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "len_shtrafs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "len_msg",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "len_dtp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "len_input_drive",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "len_input_car",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id_msg",
        type: "uint256",
      },
    ],
    name: "check_msg",
    outputs: [
      {
        internalType: "string",
        name: "content",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id_shtraf",
        type: "uint256",
      },
    ],
    name: "check_shtraf",
    outputs: [
      {
        internalType: "bool",
        name: "sost",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "check_user",
    outputs: [
      {
        internalType: "string",
        name: "FIO",
        type: "string",
      },
      {
        internalType: "string",
        name: "drive_number",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "staj",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "dtp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_shtraf_dest",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "strah_vznos",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "role",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "strah_summ",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "avto",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_adr",
        type: "address",
      },
      {
        internalType: "string",
        name: "_login",
        type: "string",
      },
      {
        internalType: "string",
        name: "_FIO",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_staj",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_DTP",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_shtraf_dest",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_strah_vznos",
        type: "uint256",
      },
    ],
    name: "create_user",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_drive_number",
        type: "string",
      },
    ],
    name: "dolg_bank",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_drive_number",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_srok",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_category",
        type: "string",
      },
    ],
    name: "drive_add",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id_input",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "sost",
        type: "bool",
      },
    ],
    name: "drive_add_dps",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_drive_number",
        type: "string",
      },
    ],
    name: "dtp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_drive_number",
        type: "string",
      },
    ],
    name: "dtp_pay",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_category",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_srok",
        type: "uint256",
      },
    ],
    name: "registr_car",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id_input",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_sost",
        type: "bool",
      },
    ],
    name: "registr_car_dps",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_login",
        type: "string",
      },
    ],
    name: "return_adr",
    outputs: [
      {
        internalType: "address",
        name: "adr",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_drive_number",
        type: "string",
      },
    ],
    name: "shtraf_dps",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id_shtraf",
        type: "uint256",
      },
    ],
    name: "shtraf_driver",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id_car",
        type: "uint256",
      },
    ],
    name: "strahovka",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "strahovka_vznos",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "update_srok",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];
