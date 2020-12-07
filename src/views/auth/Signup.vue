<template>
  <v-img min-height="85vh" max-height="95vh" src="https://wht-public-assets.s3-us-west-2.amazonaws.com/web-images/register.png">
    <v-container class="fill-height" fluid>
      
      <v-row align="center" justify="center">

        <v-col>
          <v-container align="center" justify="center">
             <v-row>
    <h1 style="color:white; margin-left:10px">Register</h1>
    </v-row>
    <v-container><v-row><h5 style="color: white">Post Comments, Share Trip Reports, Save Locations, and More!</h5></v-row></v-container>
    
            <v-form>
            
              <v-text-field
                dark
                v-model="newUser.email"
                prepend-icon="mdi-email"
                label="Email"
                name="email"
                type="text"
              ></v-text-field>

              <v-text-field
                dark
                v-model="newUser.password"
                id="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                persistent-hint
                hint="5 to 30 characters, must contain at least one lowercase letter, one uppercase letter, and one number."
              ></v-text-field>

              <v-text-field
                dark
                v-model="newUser.passConfirm"
                id="confirm-password"
                label="Confirm Password"
                name="confirm-password"
                prepend-icon="mdi-lock-open"
                type="password"
              ></v-text-field>
            </v-form>

             <v-alert v-if="message" type="error">
      {{message}}
    </v-alert>

            <router-link to="/login">
              <h6>Already a member? Login here.</h6>
            </router-link>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click.prevent="attemptRegistration" color="dark-grey">
                <v-progress-circular
                  style="margin-right: 5px"
                  indeterminate
                  color="#671d26"
                  v-if="isRegistering"
                ></v-progress-circular>Sign Up
              </v-btn>
            </v-card-actions>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-img>
</template>

<script>
export default {
    data() {
        return {
             newUser: {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        passConfirm: "",
        userClass: "user",
      },
      isRegistering: false,
      message: "",
    };
        
    },
}
</script>