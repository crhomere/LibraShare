package com.librashare.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.UserDetailsServiceAutoConfiguration;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

@SpringBootApplication(exclude = {org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration.class,
        UserDetailsServiceAutoConfiguration.class})
public class LibrashareApplication {

    public static void main(String[] args) {
        Properties props = new Properties();
        try {
            InputStream stream = LibrashareApplication.class.getClassLoader().getResourceAsStream("env.properties");
            props.load(stream);
        } catch (IOException e) {
            System.err.println("Failed to load env.properties: " + e.getMessage());
            System.exit(1);
        }
//		String dbUrl = props. getProperty ( "DB _URL") ;
        String dbUser = props.getProperty("DB_USERNAME");
        String dbPassword = props.getProperty("DB_PASSWORD");
        //String mapsApiKey = props.getProperty("API_KEY");
//		System.setProperty("spring.datasource.url",dbUrl);
        System.setProperty("spring.datasource.username", dbUser);
        System.setProperty("spring.datasource.password", dbPassword);
        //System.setProperty("google.maps.api.key", mapsApiKey);
        SpringApplication.run(LibrashareApplication.class, args);
    }

}
