package com.librashare.app.entities;


import lombok.Data;
import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.usertype.UserType;

import java.io.Serializable;
import java.sql.Array;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Arrays;


@Data
public class CustomStringArrayType implements UserType {
    private static final int[] SQL_TYPES = {java.sql.Types.ARRAY};

    // Default constructor
    public CustomStringArrayType() {
    }

    @Override
    public Object deepCopy(Object value) throws HibernateException {
        return value;
    }

    @Override
    public boolean isMutable() {
        return true;
    }

    @Override
    public Object replace(Object original, Object target, Object owner) throws HibernateException {
        return original;
    }

    @Override
    public Object assemble(Serializable cached, Object owner) throws HibernateException {
        return this.deepCopy(cached);
    }

    @SuppressWarnings("unchecked")
    @Override
    public Serializable disassemble(Object value) throws HibernateException {

        if (value == null) {
            return null;
        }
        return Arrays.copyOf((String[]) value, ((String[]) value).length);
    }


    @Override
    public int[] sqlTypes() {
        return SQL_TYPES;
    }

    @Override
    public Class<String[]> returnedClass() {

        return String[].class;
    }

    @Override

    public Object nullSafeGet(ResultSet rs, String[] names, SharedSessionContractImplementor session, Object owner)
            throws HibernateException, SQLException {
        if (names != null && names.length > 0 && rs != null && rs.getArray(names[0]) != null) {
            Array array = rs.getArray(names[0]);
            return array.getArray();
        }
        return null;
    }

    @Override
    public void nullSafeSet(PreparedStatement st, Object value, int index, SharedSessionContractImplementor session)
            throws HibernateException, SQLException {
        if (value != null && st != null) {
            String[] castObject = (String[]) value;
            Array array = session.connection().createArrayOf("text", castObject);
            st.setArray(index, array);
        } else {
            st.setNull(index, SQL_TYPES[0]);

        }
    }

    @Override
    public boolean equals(Object x, Object y) throws HibernateException {

        if (x == y) {
            return true;
        }
        if (x == null || y == null) {
            return false;
        }
        return Arrays.equals((String[]) x, (String[]) y);
    }


    @Override
    public int hashCode(Object x) throws HibernateException {
        return Arrays.hashCode((String[]) x);

    }

}

