<template>
  <div class="about">
    <h1>This is an about page</h1>
    
      วันที่<input type="date" v-model="date"><br>
      ชื่อ<input type="text" v-model="fname" /><br>
      นามสกุล<input type="text" v-model="lname" /><br>
      ผลตรวจ ATK<br><form>
        <input type="radio" value="+" v-model="atk"> +<br>
        <input type="radio" value="-" v-model="atk"> -<br> 
      </form>
      หมายเลขโทรศัพท์<input type="text" v-model="phone" /><br>
      Email<input type="email" v-model="email" /><br>
      <button @click="addData()">บันทึก</button>
      <button @click="readData()">แสดงรายชื่อ</button>
  </div>
  <div>
      <h2>ตารางรายชื่อผู้บันทึกข้อมูล Covid</h2>

      <table>
        <tr bgcolor="bluef">
          <th>วันที่</th>
          <th>ชื่อ</th>
          <th>นามสกุล</th>
          <th>ATK</th>
          <th>หมายเลขโทรศัพท์</th>
          <th>Email</th>
        </tr>
        <tr v-for="(data, index) in dbData" :key="index" bgcolor="skyblue">
          <td>
            {{ data.date }}
          </td>
          <td>
            {{ data.fname }}
          </td>
          <td>
            {{ data.lname }}
          </td>
          <td>
            {{ data.atk }}
          </td>
          <td>
            {{ data.phone }}
          </td>
          <td>
            {{ data.email }}
          </td>
        </tr>
      </table>
    </div>
  <!-- <h4>{{ dbData }}</h4>  -->
</template>

<script>
import db from "../plugins/firebaseInit";
import { collection, addDoc ,getDocs } from "firebase/firestore";

export default {
  data(){
    return{
      dbData:[],
      fname:"",
      lname:"",
      date:"",
      atk:"",
      phone:"",
      email:"",
    };
  },
  methods:{
    async addData(){
      try {
        console.log("AB");
        const docRef = await addDoc(collection(db, "Chawanwit"), {
          fname: this.fname,
          lname: this.lname,
          date: this.date,
          atk: this.atk,
          phone: this.phone,
          email: this.email,
        });
        console.log("Document written with ID: ", docRef.id);
        } catch (e) {
        console.error("Error adding document: ", e);
      }

    },
    async readData(){
      const querySnapshot = await getDocs(collection(db, "Chawanwit"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        this.dbData.push(doc.data());
      });
    }
  }
}
</script>

<style>
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

td,
th {
    border: 1px solid #000000;
    text-align: left;
    padding: 8px;
}
</style>
